/**
 * Validates the confirm or second password. Useful
 * for sign up, resetting, etc..
 * @param {string} [confirmPassword]
 * @param {auto} formValues This is th eobject returned from redux-form
 *
 * @returns {(string | undefined)} An apropriate error message or undefined
 */
const validateConfirmPassword = (confirmPassword, { password }) => {
	if (confirmPassword === password) {
		return undefined;
	}

	return 'Confirm password must match the new password';
};

export default validateConfirmPassword;
