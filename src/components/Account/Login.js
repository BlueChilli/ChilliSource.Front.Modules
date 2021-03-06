/** Libraries */
import React from 'react';

/** Components */
import CenteredComponent from '../CenteredComponent';
import { LoginForm } from './forms';

/** Class Login */
class Login extends React.Component {
	render() {
		return (
			<CenteredComponent>
				<h1>Welcome back!</h1>
				<p className="margin-top-2">
					PicMi makes it easy for you to apply for orchard jobs in New Zealand.{' '}
				</p>

				<LoginForm />
			</CenteredComponent>
		);
	}
}

export default Login;
