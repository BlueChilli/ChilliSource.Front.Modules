/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Components */
import CenteredComponent, { Row, Col } from '../CenteredComponent';
import PortalModal from '../PortalModal';
import { UpdateEmailForm, UpdatePasswordForm, UpdateProfileDetailsForm } from './forms';

/** Class Manage */
class Manage extends React.Component {
	state = {
		isUpdatingEmail: false,
		isUpdatingPassword: false,
		isUpdatingProfileDetails: false,
	};

	toggleUpdatingEmail = () =>
		this.setState(prevState => ({
			isUpdatingEmail: !prevState.isUpdatingEmail,
		}));

	toggleUpdatingPassword = () =>
		this.setState(prevState => ({
			isUpdatingEmail: !prevState.isUpdatingEmail,
		}));

	toggleUpdatingProfileDetails = () =>
		this.setState(prevState => ({
			isUpdatingEmail: !prevState.isUpdatingEmail,
		}));

	render() {
		const { isUpdatingEmail, isUpdatingPassword, isUpdatingProfileDetails } = this.state;
		const { firstName, lastName, email } = this.props;

		return (
			<CenteredComponent>
				<h1>Manage account</h1>

				<Row>
					<Col xs={12}>
						<p>
							{firstName}

							<button
								className="button button-primary margin-left-2"
								onClick={this.toggleUpdatingProfileDetails}>
								Update
							</button>
						</p>
					</Col>

					<Col xs={12}>
						<p>
							{lastName}

							<button
								className="button button-primary margin-left-2"
								onClick={this.toggleUpdatingProfileDetails}>
								Update
							</button>
						</p>
					</Col>

					<Col xs={12}>
						<p>
							{email}

							<button
								className="button button-primary margin-left-2"
								onClick={this.toggleUpdatingEmail}>
								Update
							</button>
						</p>
					</Col>

					<Col xs={12}>
						<p>
							*********
							<button
								className="button button-primary margin-left-2"
								onClick={this.toggleUpdatingPassword}>
								Update
							</button>
						</p>
					</Col>
				</Row>

				<PortalModal
					title="Update Email"
					isOpen={isUpdatingEmail}
					onClose={this.toggleUpdatingEmail}>
					<UpdateEmailForm />
				</PortalModal>

				<PortalModal
					title="Update Password"
					isOpen={isUpdatingPassword}
					onClose={this.toggleUpdatingPassword}>
					<UpdatePasswordForm />
				</PortalModal>

				<PortalModal
					title="Update Profile Details"
					isOpen={isUpdatingProfileDetails}
					onClose={this.toggleUpdatingProfileDetails}>
					<UpdateProfileDetailsForm initialValues={{ firstName, lastName }} />
				</PortalModal>
			</CenteredComponent>
		);
	}
}

const mapStateToProps = state => {
	const { firstName, lastName, email } = state.Account;

	return {
		firstName,
		lastName,
		email,
	};
};

export default connect(mapStateToProps)(Manage);
