/** Libraries */
import React from 'react';
import { reduxForm } from 'redux-form';

/** Helpers */
import ApiRequest from '../ApiRequest/';

const Form = reduxForm({
	enableReinitialize: true,
})(props => {
	const { handleSubmit, children, submitting } = props;

	return (
		<form onSubmit={handleSubmit}>
			{React.Children.map(children, (child, key) => React.cloneElement(child, { key, submitting }))}
		</form>
	);
});

/**
 * @typedef SendDataProps
 * @property {string} apiPath
 * @property {Object} [pathArgs]
 * @property {Object} [queryArgsArgs]
 * @property {Object} [mockData]
 * @property {any} body
 * @property {'PUT' | 'POST' | 'DELETE' | 'PATCH'} [type]
 */

/**
 * @class SendData
 * @augments React.Component<SendDataProps, {isSending: boolean, data: any, error: any, hasSentSuccessfully?: boolean}>
 */
class SendData extends React.Component {
	state = {
		isSending: false,
		hasSentSuccessfully: undefined,
		data: undefined,
		error: undefined,
	};

	handleSubmit = (values, dispatch) => {
		const { mockData } = this.props;

		if (mockData) {
			return this.setState(
				prevState => ({
					isSending: true,
					hasSentSuccessfully: undefined,
					data: undefined,
					error: undefined,
				}),
				() =>
					setTimeout(
						() =>
							this.setState(prevState => ({
								data: mockData,
								error: undefined,
								isSending: false,
								hasSentSuccessfully: true,
							})),
						900
					)
			);
		}

		const { apiPath, pathArgs, queryArgs, type } = this.props;

		return ApiRequest.Base(apiPath, {
			body: values,
			method: type,
			path: pathArgs,
			query: queryArgs,
		})
			.then(response =>
				this.setState(prevState => ({
					hasSentSuccessfully: true,
					isSending: false,
					data: response.data,
					error: undefined,
				}))
			)
			.catch(error =>
				this.setState(prevState => ({
					hasSentSuccessfully: false,
					isSending: false,
					data: undefined,
					error: error,
				}))
			);
	};

	render() {
		const { children } = this.props;

		if (!children) {
			return <Form onSubmit={this.handleSubmit} />;
		}

		return (
			<Form onSubmit={this.handleSubmit}>
				{React.Children.map(children, (child, key) =>
					React.cloneElement(child, {
						key,
					})
				)}
			</Form>
		);
	}
}

export default SendData;
