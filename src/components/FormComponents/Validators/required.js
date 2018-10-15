/**
 * Ensures the field always has value
 * @param {any} [value] The value to check for
 *
 * @returns {(string | undefined)} An apt error message or undefined
 */
const validateRequired = value => {
	if (value) {
		return undefined;
	}

	return 'Required';
};

export default validateRequired;
