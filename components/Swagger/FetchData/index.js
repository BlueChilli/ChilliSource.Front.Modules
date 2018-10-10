/** Libraries */
import React from 'react';

/** Helpers */
import ApiRequest from '../ApiRequest/';

const defaultModifier = value => value;

/**
 * @typedef FetchDataProps
 * @property {string} apiPath
 * @property {Object} [pathArgs]
 * @property {Object} [queryArgsArgs]
 * @property {Object} [mockData]
 * @property {Function} [modifier]
 * @property {(data: any) => any} [onRequestIsSuccessful]
 */

/**
 * @class FetchData
 * @augments React.Component<FetchDataProps, {isFetching: boolean, data: any, error: any, hasFetchedSuccessfully?: boolean}>
 */
class FetchData extends React.Component {
	state = {
		isFetching: true,
		hasFetchedSuccessfully: undefined,
		data: undefined,
		error: undefined,
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		const { mockData, onRequestIsSuccessful = defaultModifier } = this.props;

		// If Mock Mode
		if (mockData) {
			return setTimeout(() => {
				this.setState(
					prevState => ({
						data: mockData,
						isFetching: false,
						hasFetchedSuccessfully: true,
					}),
					() => onRequestIsSuccessful(mockData)
				);
			}, 1800);
		}

		const { apiPath, pathArgs, queryArgs } = this.props;

		ApiRequest.Get(apiPath, {
			path: pathArgs,
			query: queryArgs,
		})
			.then(response => {
				this.setState(
					prevState => ({
						data: response.data,
						isFetching: false,
						hasFetchedSuccessfully: true,
						error: undefined,
					}),
					() => onRequestIsSuccessful(response.data)
				);
			})
			.catch(error => {
				this.setState(prevState => ({
					error: error,
					isFetching: false,
					hasFetchedSuccessfully: false,
					data: undefined,
				}));
			});
	};

	refetchData = () =>
		this.setState(
			prevState => ({
				isFetching: true,
				hasFetchedSuccessfully: false,
				error: undefined,
				data: undefined,
			}),
			this.fetchData
		);

	/**
	 * Returns child render function provided
	 * by the dev
	 *
	 * @param {boolean} [supplyData = false] Whether or not data is provided to the child render function
	 */
	getChildRenderFunction = (supplyData = true) => {
		const { data, error, isFetching, hasFetchedSuccessfully } = this.state;
		const { modifier = defaultModifier, children } = this.props;

		const response = { data, error, isFetching, hasFetchedSuccessfully };

		return children(
			supplyData ? response : { ...response, data: undefined },
			supplyData ? modifier(data) : undefined,
			{
				refresh: this.refetchData,
			}
		);
	};

	render() {
		const { children, apiPath } = this.props;

		if (!apiPath) {
			throw new Error('apiPath is marked as required in FetchData component');
		}

		if (!children) {
			return <noscript />;
		}

		const { modifier = defaultModifier, onRequestIsSuccessful } = this.props;
		const { data, error, isFetching, hasFetchedSuccessfully } = this.state;

		if (typeof children === 'function') {
			return this.getChildRenderFunction(onRequestIsSuccessful ? false : true);
		}

		return React.Children.map(children, (child, index) =>
			React.cloneElement(child, {
				key: index,
				response: {
					data: onRequestIsSuccessful ? undefined : data,
					error,
					isFetching,
					hasFetchedSuccessfully,
				},
				modifiedData: onRequestIsSuccessful ? undefined : modifier(data),
			})
		);
	}
}

export default FetchData;
