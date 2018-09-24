/** Libraries */
import { reduxForm } from 'redux-form';
import ClipLoader from 'react-spinners/ClipLoader';
import { NavLink } from 'react-router-dom';

/** Components */
import { TextField } from '../FormComponents/';
import { Row, Col } from '../CenteredComponent';

/** Helpers */
import {
	loginUser,
	updateEmail,
	updatePassword,
	updateProfileDetails,
	registerUser,
	forgotPassword,
	resetPassword,
} from './actions';

/** Login Form */
const LoginForm = reduxForm({
	form: 'login',
	onSubmit: loginUser,
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

/** Register Form */
const RegisterForm = reduxForm({
	form: 'register',
	onSubmit: registerUser,
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Row>
				<Col xs={6}>
					<TextField
						name="firstName"
						label="First name"
						placeholder="John"
						className="margin-top-4"
						type="text"
					/>
				</Col>

				<Col xs={6}>
					<TextField
						name="lastName"
						label="Last name"
						placeholder="Doe"
						className="margin-top-4"
						type="text"
					/>
				</Col>
			</Row>

			<TextField
				name="email"
				label="Email address"
				placeholder="john@example.com"
				className="margin-top-1"
				disabled
			/>
			<TextField
				name="password"
				label="Create password"
				className="margin-top-1"
				placeholder="*********"
				type="password"
			/>

			<p className="helper-text margin-top-3">
				By clicking “Get started” I agree to {'<YOUR_PROJECT_COMPANY>'}
				’s{' '}
				<NavLink to="/terms-and-conditions" className="link">
					Terms
				</NavLink>
			</p>

			<button className="button button-primary full-width margin-top-3 flex center">
				{props.submitting && <ClipLoader size={16} color="#fff" loading={true} />}
				{props.submitting ? 'Registering' : 'Get started!'}
			</button>

			<p className="helper-text margin-top-3" style={{ textAlign: 'center' }}>
				Already have an account?{' '}
				<NavLink to="/user/login" className="link">
					Log in
				</NavLink>
			</p>
		</form>
	);
});

/** Update Email Form */
const UpdateEmailForm = reduxForm({
	form: 'updateEmail',
	initialValues: {
		emailSpecified: true,
	},
	onSubmit: updateEmail,
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextField
				name="email"
				label="New email address"
				placeholder="john@example.com"
				className="margin-top-4"
				type="text"
			/>

			<TextField name="emailSpecified" type="hidden" />

			<button className="button button-primary full-width margin-top-3 flex center">
				{props.submitting && <ClipLoader size={16} color="#fff" loading={true} />}
				{props.submitting ? 'Updating ...' : 'Update'}
			</button>
		</form>
	);
});

/** Update Password Form */
const UpdatePasswordForm = reduxForm({
	form: 'updatePassword',
	initialValues: {
		passwordSpecified: true,
	},
	onSubmit: updatePassword,
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextField
				name="currentPassword"
				label="Current password"
				placeholder="john@example.com"
				className="margin-top-4"
				type="text"
			/>

			<TextField
				name="password"
				label="New password"
				placeholder="john@example.com"
				className="margin-top-1"
				type="text"
			/>

			<TextField name="passwordSpecified" type="hidden" />

			<button className="button button-primary full-width margin-top-3 flex center">
				{props.submitting && <ClipLoader size={16} color="#fff" loading={true} />}
				{props.submitting ? 'Updating ...' : 'Update'}
			</button>
		</form>
	);
});

/** Update Profile Details Form */
const UpdateProfileDetailsForm = reduxForm({
	form: 'updateProfileDetails',
	onSubmit: updateProfileDetails,
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Row>
				<Col xs={6}>
					<TextField
						name="firstName"
						label="First name"
						placeholder="John"
						className="margin-top-4"
						type="text"
					/>
				</Col>

				<Col xs={6}>
					<TextField
						name="lastName"
						label="Last name"
						placeholder="Doe"
						className="margin-top-4"
						type="text"
					/>
				</Col>
			</Row>

			<button className="button button-primary full-width margin-top-3 flex center">
				{props.submitting && <ClipLoader size={16} color="#fff" loading={true} />}
				{props.submitting ? 'Updating ...' : 'Update'}
			</button>
		</form>
	);
});

/** Reset Password Form */
const ResetPasswordForm = reduxForm({
	form: 'reset',
	onSubmit: resetPassword,
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextField
				name="password"
				label="Choose new password"
				className="margin-top-4"
				placeholder="*********"
				type="password"
				required
			/>

			<TextField name="token" type="hidden" />

			<TextField name="email" type="hidden" />

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

/** Forgot Password Form */
const ForgotPasswordForm = reduxForm({
	form: 'forgot',
	onSubmit: forgotPassword,
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextField
				name="email"
				label="Email address"
				placeholder="john@example.com"
				className="margin-top-4"
				required
			/>

			<button className="button button-primary full-width margin-top-3 flex center">
				{props.submitting && <ClipLoader size={16} color="#fff" loading={true} />}
				{props.submitting ? 'Resetting ...' : 'Reset'}
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

export {
	LoginForm,
	RegisterForm,
	UpdateEmailForm,
	UpdatePasswordForm,
	UpdateProfileDetailsForm,
	ResetPasswordForm,
	ForgotPasswordForm,
};
