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
		const { mockData } = this.props;

		// If Mock Mode
		if (mockData) {
			return setTimeout(() => {
				this.setState(prevState => ({
					data: mockData,
					isFetching: false,
					hasFetchedSuccessfully: true,
				}));
			}, 1800);
		}

		const { apiPath, pathArgs, queryArgs } = this.props;

		if (!apiPath) {
			throw new Error('apiPath is marked as required in FetchData component');
		}

		ApiRequest.Get(apiPath, {
			path: pathArgs,
			query: queryArgs,
		})
			.then(response => {
				this.setState(prevState => ({
					data: response.data,
					isFetching: false,
					hasFetchedSuccessfully: true,
					error: undefined,
				}));
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

	render() {
		const { children } = this.props;

		if (!children) {
			return <noscript />;
		}

		const { modifier = defaultModifier } = this.props;
		const { data, error, isFetching, hasFetchedSuccessfully } = this.state;
		const modifiedData = data ? modifier(data) : undefined;

		if (typeof children === 'function') {
			const response = { data, error, isFetching };
			return children(response, modifiedData, {
				refresh: this.refetchData,
			});
		}

		return React.Children.map(children, (child, index) =>
			React.cloneElement(child, {
				key: index,
				response: { data, error, isFetching, hasFetchedSuccessfully },
				modifiedData,
			})
		);
	}
}

export default FetchData;
