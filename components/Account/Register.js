/** Libraries */
import React from 'react';

/** Components */
import { CenteredComponent } from '../CenteredComponent';
import { RegisterForm } from './forms';

/** Class Register */
class Register extends React.Component {
	render() {
		return (
			<CenteredComponent>
				<h1>LOGIN HEADING TEXT</h1>
				<p className="margin-top-2">
					Some tagline or text goes here which describes something or the other
				</p>

				<RegisterForm />
			</CenteredComponent>
		);
	}
}

export default Register;
