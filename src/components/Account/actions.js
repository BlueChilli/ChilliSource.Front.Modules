/**
 * The actions in this file are required. I have
 * only provided the signatures for each one of them.
 * If you use them without any changes, you'll will
 * get errors in the console.
 *
 * REFER TO THE DOCS FOR GUIDELINES ON IMPLEMENTATION
 */

/**
 * Authenticate user and start a new session
 * @param {{email: string, password: string}} values
 */
const loginUser = values => {
	console.error('Account > actions.js > loginUser > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * Creates a new account for the user on the system
 * @param {{firstName: string, lastName: string, email: string, password: string}} values
 */
const registerUser = values => {
	console.error('Account > actions.js > registerUser > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * Update the current user's email address.
 * @param {{email: string, emailSpecified: true}} values
 */
const updateEmail = values => {
	console.error('Account > actions.js > updateEmail > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * Update the current user's login password
 * @param {{currentPassword: string, password: string, passwordSpecified: true}} values
 */
const updatePassword = values => {
	console.error('Account > actions.js > updatePassword > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * Update profile information i.e. first name,
 * last name, etc.
 * @param {{firstName?: string, lastName?: string, profilePhotoFile?: File}} values
 */
const updateProfileDetails = values => {
	console.error('Account > actions.js > updateProfileDetails > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * Submits a forgot password request which sends and email
 * to the user to reset their password
 * @param {{email: string}} values
 */
const forgotPassword = values => {
	console.error('Account > actions.js > forgotPassword > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * Submits a reset password request with the user's
 * new chosen password
 * @param {{token:string, email: string, newPassword: string, confirmPassword: string}} values
 */
const resetPassword = values => {
	console.error('Account > actions.js > resetPassword > NOT IMPLEMENTED');
	console.log('values', values);
};

/**
 * De-authenticate user and terminate the current session
 */
const logoutUser = () => {
	console.error('Account > actions.js > logoutUser > NOT IMPLEMENTED');
};

export {
	loginUser,
	registerUser,
	updateEmail,
	updatePassword,
	updateProfileDetails,
	logoutUser,
	forgotPassword,
	resetPassword,
};
