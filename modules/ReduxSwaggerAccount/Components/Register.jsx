import React from 'react';
import SwaggerForm from '../../ReduxSwagger/lib/ReduxFormSwagger/Components/SwaggerForm';
import { Field } from 'redux-form';
import TextField from '../../FormComponents/lib/Vertical/TextField/';
import Password from '../../FormComponents/lib/Vertical/Password/Password';
import { SubmitButton } from '../../FormComponents/lib/General/SubmitButton';
import required from '../../FormComponents/lib/validators/required';
import FormError from '../../FormComponents/lib/General/FormError';
import email from '../../FormComponents/lib/validators/email';

/*

NOT DONE YET
 */
export default class Register extends React.Component {
	success(payload) {
		//getHistory.push("/app");
	}

	render() {
		return (
			<SwaggerForm id="post/api/v1/users/register" onSuccess={this.success}>
				{context => {
					return (
						<div>
							<Field name="email" label="Email" component={TextField} validate={email} />
							<Field name="password" label="Password" component={Password} validate={required} />
							<SubmitButton buttonText="Register Now" {...context} />
							<FormError {...context} />
						</div>
					);
				}}
			</SwaggerForm>
		);
	}
}
