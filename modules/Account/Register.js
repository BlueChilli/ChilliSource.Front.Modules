/** Libraries */
import React from 'react';
import { reduxForm } from 'redux-form';
import ClipLoader from 'react-spinners/ClipLoader';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import QueryString from 'query-string';

/** Components */
import TextField from '../ReduxFormComponents/lib/components/TextField';
import { CenteredComponent, Row, Col } from '../CenteredComponent';

/** Helpers */
import { registerUser } from './actions';

/** Register Form */
const RegisterForm = reduxForm({
	form: 'register',
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
				By clicking “Get started” I agree to PicMi’s{' '}
				<NavLink to="/terms-and-conditions" className="link">
					Terms
				</NavLink>{' '}
				and agree to let PicMi do a Visa check with{' '}
				<a
					href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview"
					target="_blank"
					className="link"
					rel="noopener noreferrer">
					VisaView
				</a>{' '}
				on behalf of my employer
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

/** Class Register */
class Register extends React.Component {
	handleSubmit = values => registerUser(this.props.dispatch, values);

	render() {
		const { Email: email } = QueryString.parse(this.props.location.search);

		return (
			<CenteredComponent>
				<h1>Kia ora Marco!</h1>
				<p className="margin-top-2">
					PicMi makes it easy for you to apply for orchard jobs in New Zealand.{' '}
				</p>

				<RegisterForm onSubmit={this.handleSubmit} initialValues={{ email }} />
			</CenteredComponent>
		);
	}
}

export default connect()(Register);
