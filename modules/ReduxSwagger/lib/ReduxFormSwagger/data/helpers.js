/** Libraries */
import get from 'lodash/get';

/** Helpers */
import {
	MAX_LENGTH,
	MIN_LENGTH,
	EMAIL_ADDRESS,
	FILE_SIZE,
	REQUIRED_IF,
	IS_REQUIRED,
	ALLOWED_FILE_TYPES,
	COMPARE_AGAINST_PROPERTY,
	DATA_TYPE,
	HAS_PHONE_NUMBER,
	HAS_API_RESOURCE_REFERENCE,
	API_RESOURCE_REFERENCE_ARRAY,
	HAS_ENUMS,
	TOP_LEVEL_PROPERTY,
	TOP_LEVEL_FEATURE,
} from './validations';

/**
 * Retrieves a list of all the operations provided by
 * current swagger definitions.
 * @param {*} data
 *
 * @returns {{id:string, path:string, method:string, operationId: string, nameSpace: string, action:string, summary:string, data: object}[]}
 */
const getAllOperationsFromSwagger = data => {
	const paths = data.paths;
	const apiPaths = Object.keys(paths);

	return apiPaths.reduce((operations, apiPath) => {
		const apiSubPaths = Object.keys(paths[apiPath]);

		return apiSubPaths.reduce((reduction, apiSubPath) => {
			const data = paths[apiPath][apiSubPath];
			const { operationId, summary } = data;

			const method = apiSubPath.toLowerCase(),
				action = getActionForOperationId(operationId),
				nameSpace = getNamespaceForOperationId(operationId);

			reduction.push({
				id: `${method}${apiPath}`,
				path: apiPath,
				method: method.toUpperCase(),
				operationId,
				nameSpace,
				action,
				summary,
				data,
			});

			return reduction;
		}, operations);
	}, []);
};

/**
 *
 * @param {object} data
 * @param {string} operationId
 */
const getOperationById = (data, operationId) => {
	const operations = getAllOperationsFromSwagger(data);

	const filteredOperations = operations.find(operation => operation.id === operationId);

	return filteredOperations.length > 0 ? filteredOperations[0] : undefined;
};

/**
 * Retrieves the namespace for the operation
 * @param {string} operationId
 *
 * @returns {string}
 */
const getNamespaceForOperationId = operationId => operationId.substr(0, operationId.indexOf('_'));

/**
 * Retrieves the action for the operation
 * @param {string} operationId
 *
 * @returns {string}
 */
const getActionForOperationId = operationId => operationId.substr(operationId.indexOf('_') + 1);

/**
 * Gives the base url for swagger
 * @param {object} data The swagger data to parse through
 *
 * @returns string
 */
const getBaseUrl = data => {
	const basePath = data.basePath || '';

	return `${data.schemes[0]}://${data.host}${basePath}`;
};

/**
 * Returns an object of path params if the operation
 * requires it. Undefined otherwise
 * @param {object} operation
 */
const getPathParamsForOperation = operation => {
	const params = get(operation, 'data.parameters');

	if (params === undefined) {
		return undefined;
	}

	const pathParams = params.filter(parameter => parameter.in === 'query');

	return pathParams.length > 0 ? pathParams : undefined;
};

/**
 * Returns an object of body params if the operation
 * requires it. Undefined otherwise
 * @param {object} operation
 */
const getBodyParamsForOperation = operation => {
	const params = get(operation, 'data.parameters');

	if (params === undefined) {
		return undefined;
	}

	const bodyParams = params.find(parameter => parameter.in === 'body');

	if (bodyParams) {
		return get(bodyParams, 'schema.properties');
	}

	return undefined;
};

/**
 * Returns an object of form data params if the operation
 * requires it. Undefined otherwise
 * @param {object} operation
 */
const getFormParamsForOperation = operation => {
	const params = get(operation, 'data.parameters');

	if (params === undefined) {
		return undefined;
	}

	const bodyParams = params.find(parameter => parameter.in === 'formData');

	if (bodyParams) {
		return get(bodyParams, 'schema.properties');
	}

	return undefined;
};

/**
 * Returns an object of form data params if the operation
 * requires it. Undefined otherwise
 * @param {object} operation
 */
const getQueryParamsForOperation = operation => {
	const params = get(operation, 'data.parameters');

	if (params === undefined) {
		return undefined;
	}

	const bodyParams = params.find(parameter => parameter.in === 'query');

	if (bodyParams) {
		return get(bodyParams, 'schema.properties');
	}

	return undefined;
};

/**
 *
 * @param {{title:string, maxLength?: number, type: 'string' | 'file' | 'number' | 'integer' | 'boolean' | 'array' | 'object', resourceReference?: any, choices?: string[] }} summary
 *
 * @returns {'DropDownSelectSingle' | 'Password' | 'Text' | 'TextBox' | 'Number' | 'CheckBox' | 'MultiSelect' | 'UploadSingle' | 'Unknown'}
 */
const getFieldDataType = summary => {
	const fieldType = summary.type;

	// Has Resource Reference
	if (summary.resourceReference) {
		return 'DropDownSelectSingle';
	}

	// Has choices
	if (summary.choices && fieldType !== 'array') {
		return 'DropDownSelectSingle';
	}

	// Simple Data Types
	switch (fieldType) {
		case 'string': {
			if (summary.dataType && summary.dataType.toLowerCase() === 'password') {
				return 'Password';
			}

			const size = summary.maxLength || 10;
			return size < 499 ? 'Text' : 'TextBox';
		}

		case 'boolean':
			return 'CheckBox';

		case 'integer':
		case 'number':
			return 'Number';

		case 'array':
			return 'MultiSelect';

		case 'file':
			return 'UploadSingle';

		default:
			return 'Unknown';
	}
};

/**
 * Creates an object from schema definition so we can easily
 * consume it in JS.
 * @param {Object} schemaItem The schema object to parse
 *
 * @returns {{validations: any[], features: any[], name?: string, title?:string, type?: 'string' | 'file' | 'number' | 'integer' | 'boolean' | 'array' | 'object', properties?: any, format?:string, datatype?:string, choices?: string[], arrayOf?: { type: string, resourceReference: string}, resourceReference?: string, compareWith?: string, size?: number}}
 */
const getObjectFromSwaggerSchema = schemaItem => {
	const schemaInterpreters = [
		TOP_LEVEL_PROPERTY('name'),
		TOP_LEVEL_PROPERTY('title'),
		TOP_LEVEL_PROPERTY('type'),
		TOP_LEVEL_PROPERTY('properties'),
		TOP_LEVEL_PROPERTY('format'),
		TOP_LEVEL_FEATURE('format'),
		MAX_LENGTH,
		MIN_LENGTH,
		EMAIL_ADDRESS,
		IS_REQUIRED,
		COMPARE_AGAINST_PROPERTY,
		FILE_SIZE,
		ALLOWED_FILE_TYPES,
		REQUIRED_IF,
		DATA_TYPE,
		HAS_API_RESOURCE_REFERENCE,
		API_RESOURCE_REFERENCE_ARRAY,
		HAS_ENUMS,
		HAS_PHONE_NUMBER,
	];

	// Get the array of objects from each interpreter
	const filteredSchemaItemObjects = schemaInterpreters
		.map(interpreter => interpreter(schemaItem))
		.filter(schemaItemObject => schemaItemObject !== undefined);

	// Flatten array into a single object
	const flattenedObject = {
		validations: [],
		features: [],
	};

	const schemaObject = filteredSchemaItemObjects.reduce((reduction, schemaItemObject) => {
		const keys = Object.keys(schemaItemObject);

		keys.forEach(key => {
			switch (key) {
				case 'validation': {
					reduction.validations.push(schemaItemObject[key]);
					break;
				}

				case 'feature': {
					reduction.features.push(schemaItemObject[key]);
					break;
				}

				default: {
					reduction[key] = schemaItemObject[key];
					break;
				}
			}
		});

		return reduction;
	}, flattenedObject);

	return schemaObject;
};

export {
	getAllOperationsFromSwagger,
	getOperationById,
	getBaseUrl,
	getPathParamsForOperation,
	getBodyParamsForOperation,
	getFormParamsForOperation,
	getQueryParamsForOperation,
	getFieldDataType,
	getObjectFromSwaggerSchema,
};
