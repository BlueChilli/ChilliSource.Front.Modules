/** Libraries */
import QueryString from 'query-string';
// eslint-disable-next-line
import { AxiosRequestConfig } from 'axios';

/** Helpers */
import { axiosInstance, getApiRequirements, loadSwaggerData } from '../helpers';

/**
 * Checks whether or not the provided apiPath is valid or not
 * @param {string} apiPath
 *
 * @returns {boolean} Whether or not the apiPath is valid or not
 */
const apiPathIsWellFormed = apiPath => {
	if (!apiPath || apiPath.length === 0) {
		console.error('Supplied apiPath is empty or non-existant. Please check your request.');
		return false;
	}

	if (apiPath.indexOf('/api/v1') > 0) {
		// The type of operation is in apiPath
		return true;
	}

	if (apiPath.indexOf('/api/v1') < 0) {
		// The type apiPath is not explicit. Method is supplied by a different param.
		return true;
	}

	console.error(
		'Supplied `apiPath` is not well-formed. Either supply the full API path from Swagger like so - `get/api/v1/user/account{id}` - or just supply - `/user/account/24` - and supply the method separately. Mixing these patterns will certainly mess shit up! Please check your request.'
	);
	return false;
};

/**
 * Checks whether or not the provided apiPath is valid or not
 * @param {string} apiPath
 *
 * @returns {boolean} Whether or not the apiPath provided has the params and query args inserted or not
 */
const apiPathHasBeenSubstitutedWithParamsAndQueryArgs = apiPath => {
	const filteredCharacters = ['{', '}'].filter(character => apiPath.indexOf(character) > 0);

	if (filteredCharacters.length > 0) {
		console.error(
			'Your apiPath has not been formatted correctly. Please remove curly braces(i.e. {, }) before making the request'
		);
		return false;
	}

	return true;
};

/**
 *
 * @param {string} apiPath
 *
 * @returns {boolean} Whether or not the apiPath provided is full path or not
 */
const apiPathIncludesOperationType = apiPath => {
	const filteredOperationTypes = ['get', 'post', 'patch', 'put', 'delete'].filter(
		operationType => apiPath.indexOf(operationType) === 0
	);

	return filteredOperationTypes.length > 0;
};

/**
 * @typedef {AxiosRequestConfig} ApiRequestParams
 * @property {Object} [query]
 * @property {Object} [path]
 * @property {Object} [body]
 * @property {'get' | 'put' | 'post' | 'patch' | 'delete'} [method]
 */

/**
 * Make a new API Request. Its a simple wrapper
 * around axios and different types of operations
 * it supports
 * @param {string} apiPath Either like '/user/account' or a full path like '/get/v1/api/user/account'
 * @param {ApiRequestParams} apiRequestParams
 *
 * @returns {AxiosPromise}
 */
async function _ApiRequest(apiPath, apiRequestParams) {
	if (!apiPathIsWellFormed(apiPath)) {
		return;
	}

	if (apiPathIncludesOperationType(apiPath)) {
		/**
		 * This is when the dev has provided the full URL including the operation type. This
		 * will need to be updated with query args and path args.
		 */

		try {
			await loadSwaggerData();
		} catch (error) {
			//TODO: Need better error handling here
			console.error("Couldn't load the swagger data. Please try again.", error);
			return Promise.reject(error);
		}
		// end try-catch

		const { method, url } = getApiRequirements(apiPath);
		const { body: data, query, path, ...remainingAttributes } = apiRequestParams;

		let updatedApiPath = url;

		if (query) {
			updatedApiPath = `${updatedApiPath}?${QueryString.stringify(query)}`;
		}

		if (path) {
			updatedApiPath = Object.keys(path).reduce((reduction, key) => {
				if (reduction.indexOf(`{${key}}`) >= 0) {
					return reduction.replace(`{${key}}`, path[key]);
				}

				return reduction;
			}, updatedApiPath);
		}

		return axiosInstance({
			method,
			url: updatedApiPath,
			data,
			...remainingAttributes,
		});
	} else {
		/**
		 * This is when the dev has provided the type explicitly. We
		 * need to check the path and then just make the request. No
		 * need to look up swagger definitions & stuff
		 */
		if (!apiPathHasBeenSubstitutedWithParamsAndQueryArgs(apiPath)) {
			return Promise.reject({
				response: {
					data: {
						errorMessage:
							'Supplied `apiPath` is not well-formed. Either supply the full API path from Swagger like so - `get/api/v1/user/account{id}` - or just supply - `/user/account/24` - and supply the method separately. Mixing these patterns will certainly mess shit up! Please check your request.',
					},
				},
			});
		}

		const { method, body: data, ...remainingAttributes } = apiRequestParams;

		if (!method) {
			return Promise.reject({
				response: {
					data: {
						errorMessage:
							"Please provide the type of operation you'd like to perform. `method` has not been provided in request params",
					},
				},
			});
		}

		return axiosInstance({
			method,
			url: apiPath,
			data,
			...remainingAttributes,
		});
	}
}

/**
 * Make a new Get Request
 * @param {string} apiPath Either like '/user/account' or a full path like '/get/v1/api/user/account'
 * @param {{query: Object, path: Object}} apiRequestParams
 *
 * @returns {Promise}
 */
const _Get = (apiPath, apiRequestParams) =>
	_ApiRequest(apiPath, { ...apiRequestParams, method: 'get' });

/**
 * Make a new Post Request
 * @param {string} apiPath Either like '/user/account' or a full path like '/get/v1/api/user/account'
 * @param {{query: Object, path: Object, body: Object}} apiRequestParams
 *
 * @returns {Promise}
 */
const _Post = (apiPath, apiRequestParams) =>
	_ApiRequest(apiPath, { ...apiRequestParams, method: 'post' });

/**
 * Make a new Patch Request
 * @param {string} apiPath Either like '/user/account' or a full path like '/get/v1/api/user/account'
 * @param {{query: Object, path: Object, body: Object}} apiRequestParams
 *
 * @returns {Promise}
 */
const _Patch = (apiPath, apiRequestParams) =>
	_ApiRequest(apiPath, { ...apiRequestParams, method: 'patch' });

/**
 * Make a new Put Request
 * @param {string} apiPath Either like '/user/account' or a full path like '/get/v1/api/user/account'
 * @param {{query: Object, path: Object, body: Object}} apiRequestParams
 *
 * @returns {Promise}
 */
const _Put = (apiPath, apiRequestParams) =>
	_ApiRequest(apiPath, { ...apiRequestParams, method: 'put' });

/**
 * Make a new Delete Request
 * @param {string} apiPath Either like '/user/account' or a full path like '/get/v1/api/user/account'
 * @param {{query: Object, path: Object}} apiRequestParams
 *
 * @returns {Promise}
 */
const _Delete = (apiPath, apiRequestParams) =>
	_ApiRequest(apiPath, { ...apiRequestParams, method: 'delete' });

const ApiRequest = {
	Base: _ApiRequest,
	Get: _Get,
	Post: _Post,
	Patch: _Patch,
	Delete: _Delete,
	Put: _Put,
};

export default ApiRequest;
