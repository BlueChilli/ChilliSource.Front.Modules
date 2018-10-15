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
		// eslint-disable-next-line
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		'i'
	);

	if (emailRegex(email)) {
		return undefined;
	}

	return 'Please enter a valid email address';
};

export default validateEmail;
