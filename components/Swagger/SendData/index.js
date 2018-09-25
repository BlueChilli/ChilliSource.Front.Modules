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
 * @property {(data: any) => any} [onRequestIsSuccessful]
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
		const { mockData, onRequestIsSuccessful } = this.props;

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
							this.setState(
								prevState => ({
									data: mockData,
									error: undefined,
									isSending: false,
									hasSentSuccessfully: true,
								}),
								() => onRequestIsSuccessful(mockData)
							),
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
				this.setState(
					prevState => ({
						hasSentSuccessfully: true,
						isSending: false,
						data: response.data,
						error: undefined,
					}),
					() => onRequestIsSuccessful(mockData)
				)
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

	/**
	 * Returns child render function provided
	 * by the dev
	 *
	 * @param {boolean} [supplyData = false] Whether or not data is provided to the child render function
	 */
	getChildRenderFunction = (supplyData = true) => {
		const { data, error, isSending, hasSentSuccessfully, children } = this.state;
		const { modifier = defaultModifier } = this.props;

		const response = { data, error, isSending, hasSentSuccessfully };

		return children(
			supplyData ? response : { ...response, data: undefined },
			supplyData ? modifier(data) : undefined
		);
	};

	render() {
		const { apiPath } = this.props;

		if (!apiPath) {
			throw new Error('apiPath is marked as required while using SendData.');
		}

		if (!children) {
			throw new Error(
				'`children` or a child component is marked as required while using SendData.'
			);
		}

		const {
			children,
			modifier = defaultModifier,
			onRequestIsSuccessful,
			...remainingAttributes
		} = this.props;
		const { data, error, isSending, hasSentSuccessfully } = this.state;

		return (
			<Form form={camelCase(apiPath)} onSubmit={this.handleSubmit} {...remainingAttributes}>
				{typeof children === 'function' ? (
					this.getChildRenderFunction(onRequestIsSuccessful ? false : true)
				) : (
					<noscript />
				)}

				{React.Children.map(children, (child, key) => {
					return React.cloneElement(child, {
						key,
						response: {
							data: onRequestIsSuccessful ? undefined : data,
							error,
							isSending,
							hasSentSuccessfully,
						},
						modifiedData: onRequestIsSuccessful ? undefined : modifier(data),
					});
				})}
			</Form>
		);
	}
}

export default SendData;
