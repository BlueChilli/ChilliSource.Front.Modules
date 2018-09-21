/**
 * Retrieves the maxLength validation, if any
 * @param {object} schemaItem
 *
 * @returns {({size: number, feature:string, validation: { maxLength: number}} | undefined)}
 */
const MAX_LENGTH = schemaItem => {
	if (!schemaItem || schemaItem['maxLength'] !== undefined) {
		const size = schemaItem['maxLength'];
		return {
			size,
			feature: `maxLength : ${size}`,
			validation: {
				maxLength: size,
			},
		};
	}

	return undefined;
};

/**
 * Retrieves the minLength validation, if any
 * @param {object} schemaItem
 *
 * @returns {({size: number, feature:string, validation: { maxLength: number}} | undefined)}
 */
const MIN_LENGTH = schemaItem => {
	if (!schemaItem || schemaItem['minLength'] !== undefined) {
		const size = schemaItem['minLength'];
		return {
			size,
			feature: `minLength : ${size}`,
			validation: {
				maxLength: size,
			},
		};
	}

	return undefined;
};

/**
 * Retrieves the file size validation, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, validation: { fileMaxSize: number }} | undefined)}
 */
const FILE_SIZE = schemaItem => {
	if (!schemaItem || schemaItem['x-blue-FileMaxSize'] !== undefined) {
		const size = schemaItem['x-blue-FileMaxSize'].maxSize;
		return {
			feature: `fileMaxSize : ${size}`,
			validation: {
				fileMaxSize: size,
			},
		};
	}

	return undefined;
};

/**
 * Retrieves the requiredIf validation, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, validation: { requiredIf: string }} | undefined)}
 */
const REQUIRED_IF = schemaItem => {
	if (!schemaItem || schemaItem['x-blue-RequiredIf'] !== undefined) {
		return {
			feature: 'requiredIf',
			validation: {
				requiredIf: schemaItem['x-blue-RequiredIf'],
			},
		};
	}

	return undefined;
};

/**
 * Retrieves the required validation, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, validation: string} | undefined)}
 */
const IS_REQUIRED = schemaItem => {
	if (!schemaItem || schemaItem['x-sys-Required'] !== undefined) {
		return {
			feature: 'required',
			validation: 'required',
		};
	}

	return undefined;
};

/**
 * Retrieves the file extensions' validation, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, validation: { fileExtensions : string[]}} | undefined)}
 */
const ALLOWED_FILE_TYPES = schemaItem => {
	if (!schemaItem || schemaItem['x-blue-HttpPostedFileBaseFileExtensions'] !== undefined) {
		const extensions = schemaItem['x-blue-HttpPostedFileBaseFileExtensions'];

		return {
			feature: `fileExtensions : ${extensions.extensions}`,
			validation: {
				fileExtensions: extensions,
			},
		};
	}

	return undefined;
};

/**
 * Retrieves the comparison validation, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, compareWith: string, validation: { compareWith : string[]}} | undefined)}
 */
const COMPARE_AGAINST_PROPERTY = schemaItem => {
	if (!schemaItem || schemaItem['x-sys-Compare'] !== undefined) {
		const propertyToCompareAgainst = schemaItem['x-sys-Compare'].otherProperty;

		return {
			feature: `Compare with : ${propertyToCompareAgainst}`,
			compareWith: propertyToCompareAgainst,
			validation: {
				compareWith: propertyToCompareAgainst,
			},
		};
	}

	return undefined;
};

/**
 * Retrieves the data type for the field, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, datatype: string} | undefined)}
 */
const DATA_TYPE = schemaItem => {
	if (!schemaItem || schemaItem['x-sys-DataType'] !== undefined) {
		const dataType = schemaItem['x-sys-DataType'].datatype.toLowerCase();

		return {
			feature: `datatype : ${dataType}`,
			datatype: dataType,
		};
	}

	return undefined;
};

/**
 * Retrieves the email data type, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, validation: string} | undefined)}
 */
const EMAIL_ADDRESS = schemaItem => {
	if (!schemaItem || schemaItem['x-sys-EmailAddress'] !== undefined) {
		return {
			feature: `email`,
			validation: 'email',
		};
	}

	return undefined;
};

/**
 * Retrieves the phone number data type, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, datatype: string} | undefined)}
 */
const HAS_PHONE_NUMBER = schemaItem => {
	if (!schemaItem || schemaItem['x-blue-PhoneNumber'] !== undefined) {
		return {
			feature: `datatype : PhoneNumber`,
			datatype: schemaItem['x-blue-PhoneNumber'],
		};
	}

	return undefined;
};

/**
 * Retrieves the phone number data type, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, datatype: string} | undefined)}
 */
const HAS_API_RESOURCE_REFERENCE = schemaItem => {
	if (!schemaItem || schemaItem['x-blue-ApiResourceReference'] !== undefined) {
		const resource = schemaItem['x-blue-ApiResourceReference'].resourceName;

		return {
			resourceReference: resource,
			feature: `API Resource Reference : ${resource}`,
		};
	}

	return undefined;
};

/**
 * Retrieves the API Resource Reference, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, arrayOf: { type: string, resourceReference: string}} | undefined)}
 */
const API_RESOURCE_REFERENCE_ARRAY = schemaItem => {
	if (!schemaItem || schemaItem['items'] !== undefined) {
		const items = schemaItem['items'];
		const { type } = items;

		const apiResourceReference = items['x-blue-ApiResourceReference']
			? items['x-blue-ApiResourceReference'].resourceName
			: undefined;

		return {
			arrayOf: {
				type,
				resourceReference: apiResourceReference,
			},
			feature: `Wants an array from resource referenceS : <${type}> ${apiResourceReference}`,
		};
	}

	return undefined;
};

/**
 * Retrieves the enum references, if any
 * @param {object} schemaItem
 *
 * @returns {({feature:string, datatype: string} | undefined)}
 */
const HAS_ENUMS = schemaItem => {
	if (!schemaItem || schemaItem['x-blue-enum-definitions'] !== undefined) {
		return {
			feature: `Enum definition provided with the API itself`,
			choices: schemaItem['x-blue-enum-definitions'],
		};
	}

	return undefined;
};

/**
 * Gives us a function to pick the top level
 * properties by name
 * @param {*} levelName
 *
 * @returns {{[x:string]: string}}
 */
const TOP_LEVEL_PROPERTY = levelName => schemaItem => {
	if (!schemaItem || schemaItem[levelName] !== undefined) {
		return {
			[levelName]: schemaItem[levelName],
		};
	}

	return undefined;
};

/**
 * Gives us a function to pick the top level
 * features by name
 * @param {*} levelName
 *
 * @returns {{feature: string}}
 */
const TOP_LEVEL_FEATURE = levelName => schemaItem => {
	if (!schemaItem || schemaItem[levelName] !== undefined) {
		return {
			feature: `${levelName} : ${schemaItem[levelName]}`,
		};
	}

	return undefined;
};

export {
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
};
