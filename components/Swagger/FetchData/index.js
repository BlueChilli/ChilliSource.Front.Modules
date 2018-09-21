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
 * @augments React.Component<FetchDataProps, {isFetching: boolean, data: any, error: any}>
 */
class FetchData extends React.Component {
	state = {
		isFetching: true,
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
				}));
			}, 900);
		}

		const { apiPath, pathArgs, queryArgs } = this.props;

		ApiRequest.Get(apiPath, {
			path: pathArgs,
			query: queryArgs,
		})
			.then(response => {
				this.setState(prevState => ({
					data: response.data,
					isFetching: false,
					error: undefined,
				}));
			})
			.catch(error => {
				this.setState(prevState => ({
					error: error,
					isFetching: false,
					data: undefined,
				}));
			});
	};

	refetchData = () =>
		this.setState(
			prevState => ({
				isFetching: true,
				error: undefined,
				data: undefined,
			}),
			this.fetchData
		);

	// shouldComponentUpdate(nextProps, nextState) {
	// 	const propsHaveChanged = JSON.stringify(nextProps) !== JSON.stringify(this.props),
	// 		hasFinishedApiRequest = this.state.isFetching === true && nextState.isFetching === false;

	// 	if (propsHaveChanged || hasFinishedApiRequest) {
	// 		return true;
	// 	}

	// 	return false;
	// }

	render() {
		const { children } = this.props;
		const { data, error, isFetching, modifier = defaultModifier } = this.state;

		if (typeof children === 'function') {
			const response = { data, error, isFetching };
			return children(response, data ? modifier(data) : undefined, {
				refresh: this.refetchData,
			});
		}

		return React.Children.map(children, (child, index) =>
			React.cloneElement(child, { key: index, data, error, isFetching })
		);
	}
}

export default FetchData;
