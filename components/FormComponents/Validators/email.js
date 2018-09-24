/**
 * Checks whether the input is a valid email
 * address or not and returns an apt error message
 * @param {string} [email]
 *
 * @returns {(string | undefined)} An apropriate error message or undefined
 */
const validateEmail = email => {
	if (!email) {
		return undefined;
	}

	const emailRegex = new RegExp(
		"^(?:[w!#$%&'*+-/=?^`{|}~]+.)*[w!#$%&'*+-/=?^`{|}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-](?!.)){0,61}[a-zA-Z0-9]?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-](?!$)){0,61}[a-zA-Z0-9]?)|(?:[(?:(?:[01]?d{1,2}|2[0-4]d|25[0-5]).){3}(?:[01]?d{1,2}|2[0-4]d|25[0-5])]))$"
	);

	if (emailRegex(email)) {
		return undefined;
	}

	return 'Please enter a valid email address';
};

export default validateEmail;
