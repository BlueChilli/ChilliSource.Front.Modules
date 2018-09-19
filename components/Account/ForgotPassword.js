/** Libraries */
import React from 'react';

/** Components */
import CenteredComponent from '../CenteredComponent';
import { ForgotPasswordForm } from './forms';

/** Class ForgotPassword */
class ForgotPassword extends React.Component {
	render() {
		return (
			<CenteredComponent>
				<h1>Forgot password?</h1>
				<p className="margin-top-2">
					No problems! Enter your email address and we'll send you a link to reset it.
				</p>

				<ForgotPasswordForm />
			</CenteredComponent>
		);
	}
}

export default ForgotPassword;
