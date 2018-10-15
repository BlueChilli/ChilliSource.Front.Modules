/** Libraries */
import { isHttpsUri, isWebUri, isUri } from 'valid-url';

/**
 * Ensures the entered value is well-formed
 * @param {'http' | 'https' | 'URI_STANDARD' |} [type] The type of check. Most of the time 'http' or 'https' will be fine. Just in case if you'd like more control, you can use 'URI_STANDARD' which validates according to RFC 3986.
 *
 * @returns {(value: string) => string | undefined} A validator function which generates an apt error message or undefined
 */
const validateValueIsUrlOfType = (type = 'http') => value => {
	if (!value) {
		return undefined;
	}

	if (type === 'URI_STANDARD') {
		return isUri(value) ? undefined : 'Please enter a valid URI';
	} else if (type === 'https') {
		return isHttpsUri(value) ? undefined : 'Please enter a valid https URL';
	}

	return isWebUri(value) ? undefined : 'Please enter a valid URL';
};

export default validateValueIsUrlOfType;
