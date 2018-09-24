/** Libraries */
import React from 'react';
// eslint-disable-next-line
import { reduxForm, ConfigProps } from 'redux-form';
import camelCase from 'lodash/camelCase';

/** Helpers */
import ApiRequest from '../ApiRequest/';

const defaultModifier = value => value;

const Form = reduxForm()(props => {
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
 * @augments React.Component<SendDataProps & ConfigProps, {isSending: boolean, data: any, error: any, hasSentSuccessfully?: boolean}>
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

		return Promise.resolve(
			this.setState(prevState => ({
				isSending: true,
			}))
		)
			.then(_ =>
				ApiRequest.Base(apiPath, {
					body: values,
					method: type,
					path: pathArgs,
					query: queryArgs,
				})
			)
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
		const { apiPath } = this.props;

		if (!apiPath) {
			throw new Error('apiPath is marked as required while using SendData.');
		}

		const { children, modifier = defaultModifier, ...remainingAttributes } = this.props;
		const { data, error, isSending, hasSentSuccessfully } = this.state;

		const modifiedData = data ? modifier(data) : undefined;

		return (
			<Form form={camelCase(apiPath)} onSubmit={this.handleSubmit} {...remainingAttributes}>
				{!children ? (
					<noscript />
				) : typeof children === 'function' ? (
					children(data, modifiedData)
				) : (
					React.Children.map(children, (child, key) => {
						return React.cloneElement(child, {
							key,
							response: {
								data,
								error,
								isSending,
								hasSentSuccessfully,
							},
							modifiedData,
						});
					})
				)}
			</Form>
		);
	}
}

export default SendData;
