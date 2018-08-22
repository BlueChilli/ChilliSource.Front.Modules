/** Libraries */
import React from 'react';
import { reduxForm } from 'redux-form';
import ClipLoader from 'react-spinners/ClipLoader';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/** Components */
import TextField from '../ReduxFormComponents/lib/components/TextField';
import { CenteredComponent } from '../CenteredComponent';

/** Helpers */
// Uncomment this line below and fix the import path
//import { loginUser } from 'UPDATE_IMPORT_PATH_HERE';

// Delete the line below after fixing the import path just above this
const loginUser = values => console.log('loginUser', values);

/** Login Form */
const LoginForm = reduxForm({
	form: 'login',
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextField
				name="email"
				label="Email address"
				placeholder="john@example.com"
				className="margin-top-4"
			/>
			<TextField
				name="password"
				label="Create password"
				className="margin-top-1"
				placeholder="*********"
				type="password"
			/>

			<button className="button button-primary full-width margin-top-3 flex center">
				{props.submitting && <ClipLoader size={16} color="#fff" loading={true} />}
				{props.submitting ? 'Logging in' : 'Login'}
			</button>

			<p className="helper-text margin-top-3" style={{ textAlign: 'center' }}>
				Do not have an account?{' '}
				<NavLink to="/user/register" className="link">
					Create account
				</NavLink>
			</p>
		</form>
	);
});

/** Class Login */
class Login extends React.Component {
	render() {
		return (
			<CenteredComponent>
				<h1>Welcome back!</h1>
				<p className="margin-top-2">
					PicMi makes it easy for you to apply for orchard jobs in New Zealand.{' '}
				</p>

				<LoginForm onSubmit={loginUser} />
			</CenteredComponent>
		);
	}
}

export default connect()(Login);
