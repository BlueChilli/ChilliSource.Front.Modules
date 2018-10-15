/**
 * Ensures a field always has spcified minimnum
 * length before being allowed to be submitted
 * @param {number} minLength The minimum length to check for
 *
 * @returns {(value: string) => string | undefined} A validator function which generates an apt error message or undefined
 */
const validateMinimumLength = minLength => value => {
	if (!value) {
		return undefined;
	}

	if (value.length >= minLength) {
		return undefined;
	}

	return `Min. ${minLength} characters`;
};

/**
 * Ensures a field always has spcified maximum
 * length before being allowed to be submitted
 * @param {number} maxLength The maximum length to check for
 *
 * @returns {(value: string) => string | undefined} A validator function which generates an apt error message or undefined
 */
const validateMaximumLength = maxLength => value => {
	if (!value) {
		return undefined;
	}

	if (value.length <= maxLength) {
		return undefined;
	}

	return `Max. ${maxLength} characters`;
};

export { validateMaximumLength, validateMinimumLength };
