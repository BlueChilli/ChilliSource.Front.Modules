/** Helpers */
import { getSwaggerEndPoint } from './configuration';
import axiosInstance from './getAxiosInstance';
import {
	getOperationById,
	getPathParamsForOperation,
	getBodyParamsForOperation,
	getFormParamsForOperation,
	getQueryParamsForOperation,
	getObjectFromSwaggerSchema,
} from './manipulators';

/** Variables */
let swaggerData = undefined,
	cachedSwaggerEndPoint = '';

/**
 * Fetches swagger definitions and loads them into
 * the memory
 *
 * @returns {Promise} A promise to allow the user to continue on from the end of this action
 */
const loadSwaggerData = () => {
	const swaggerApiUrl = getSwaggerEndPoint();

	if (swaggerApiUrl.length === 0) {
		throw new Error(
			'Please check your .env-cmdrc file and ensure you have defined REACT_APP_API_KEY & REACT_APP_BASE_URL'
		);
	}

	if (swaggerData !== undefined && cachedSwaggerEndPoint === swaggerApiUrl) {
		return new Promise.resolve(swaggerData);
	}

	return axiosInstance.get(swaggerApiUrl).then(response => {
		swaggerData = response.data;
		cachedSwaggerEndPoint = swaggerApiUrl;

		return Promise.resolve(response);
	});
};

/**
 * Returns the currently cached swagger data
 */
const retreiveCachedSwaggerData = () => swaggerData;

/**
 * Tells us what this endpoint expects in order to work
 * @param {string} id The operation to fetch requirements for
 */
const getApiRequirements = id => {
	const operation = getOperationById(swaggerData, id);

	if (operation === undefined) {
		throw new Error(`getApiRequirements > operationId - "${id}" - not found.`);
	}

	return {
		hasPath: getPathParamsForOperation(operation) ? true : false,
		hasBody: getBodyParamsForOperation(operation) ? true : false,
		hasForm: getFormParamsForOperation(operation) ? true : false,
		hasQuery: getQueryParamsForOperation(operation) ? true : false,
		method: operation.method,
		url: `${getBaseUrl(swaggerData)}${operation.path}`,
	};
};

/**
 *
 * @param {*} schemaItem
 * @param {*} name
 *
 * @returns {{validations: any[], features: any[], name?: string, title?:string, type?: 'string' | 'file' | 'number' | 'integer' | 'boolean' | 'array' | 'object', properties?: any, format?:string, datatype?:string, choices?: string[], arrayOf?: { type: string, resourceReference: string}, resourceReference?: string, compareWith?: string, size?: number, _schemaItem: Object}}
 */
const getSchemaItemSummary = (schemaItem, name = undefined) => {
	return { ...getObjectFromSwaggerSchema(schemaItem), _schemaItem: schemaItem, name };
};

/**
 * Gives us an array of summary objects for the operation
 * under consideration
 * @param {*} operationId
 */
const getSummaryForOperationById = operationId => {
	const operation = getOperationById(swaggerData, operationId);
	const postableParameters =
		getBodyParamsForOperation(operation) || getFormParamsForOperation(operation);

	return Object.keys(postableParameters).map(key =>
		getSchemaItemSummary(postableParameters[key], key)
	);
};

export {
	loadSwaggerData,
	getApiRequirements,
	getSchemaItemSummary,
	getSummaryForOperationById,
	retreiveCachedSwaggerData,
};
