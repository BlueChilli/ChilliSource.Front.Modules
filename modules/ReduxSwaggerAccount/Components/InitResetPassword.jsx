import React from 'react';
import { connect } from 'react-redux';
import { swaggerLoader, SwaggerForm } from '../../ReduxSwagger/lib/ReduxFormSwagger/index';
import { Field } from 'redux-form';
import TextField from '../../FormComponents/lib/Vertical/TextField/';
import email from '../../FormComponents/lib/validators/email';
import { SubmitButton } from '../../FormComponents/lib/General/SubmitButton';
import FormError from '../../FormComponents/lib/General/FormError';
import { Link } from 'react-router-dom';

class ResetPassword extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = { pwresetted: false };
	}

	success() {
		this.setState({ pwresetted: true });
	}

	render() {
		if (this.state.pwresetted === true) {
			return (
				<div>
					<h1 style={{ paddingBottom: '16px' }}>Reset Password</h1>
					<p>We have sent you an email with instructions on what to do next.</p>
					<Link to="/">Continue</Link>
				</div>
			);
		}

		return (
			<SwaggerForm id="post/api/v1/useraccount/passwordreset" onSuccess={this.success.bind(this)}>
				{context => {
					return (
						<div>
							<h1 style={{ paddingBottom: '16px' }}>Reset Password</h1>
							<Field
								name="email"
								label="Email"
								component={TextField}
								validate={email}
								helperText="Please enter your email address"
							/>
							<SubmitButton buttonText="Register Now" {...context} />
							<FormError {...context} />
						</div>
					);
				}}
			</SwaggerForm>
		);
	}
}

export default connect()(swaggerLoader(ResetPassword));
