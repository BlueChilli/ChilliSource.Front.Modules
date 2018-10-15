/** Libraries */
import React from 'react';

/** Components */
import CenteredComponent from '../CenteredComponent';
import { ResetPasswordForm } from './forms';

/** Class ResetPassword */
class ResetPassword extends React.Component {
	render() {
		return (
			<CenteredComponent>
				<h1>Reset Password</h1>
				<p className="margin-top-2">Enter your new password below</p>

				<ResetPasswordForm />
			</CenteredComponent>
		);
	}
}

export default ResetPassword;
