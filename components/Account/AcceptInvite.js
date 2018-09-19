/** Libraries */
import React from 'react';
import { reduxForm } from 'redux-form';
import ClipLoader from 'react-spinners/ClipLoader';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import QueryString from 'query-string';

/** Components */
import TextField from '../FormComponents/lib/components/TextField';
import { CenteredComponent, Row, Col } from '../CenteredComponent';

/** Helpers */
import { registerUser } from './actions';

/** Invitation Form */
const InvitationForm = reduxForm({
	form: 'invitation',
})(props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Row>
				{/* First Name */}
				<Col xs={6}>
					<TextField
						name="firstName"
						label="First name"
						placeholder="John"
						className="margin-top-4"
						type="text"
					/>
				</Col>

				{/* Last Name */}
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

			{/* Email */}
			<TextField
				name="email"
				label="Email address"
				placeholder="john@example.com"
				className="margin-top-1"
				disabled
			/>

			{/* Password */}
			<TextField
				name="password"
				label="Create password"
				className="margin-top-1"
				placeholder="*********"
				type="password"
			/>

			<TextField name="token" type="hidden" />

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

/** Class AcceptInvite */
class AcceptInvite extends React.Component {
	handleSubmit = values => registerUser(this.props.dispatch, values);

	render() {
		const { Email: email, Token: token } = QueryString.parse(this.props.location.search);

		return (
			<CenteredComponent>
				<h1>ACCEPT INVITATION HEADING</h1>
				<p className="margin-top-2">
					Some tagline or text goes here which describes something or the other
				</p>

				<InvitationForm onSubmit={registerUser} initialValues={{ email, token }} />
			</CenteredComponent>
		);
	}
}

export default connect()(AcceptInvite);
