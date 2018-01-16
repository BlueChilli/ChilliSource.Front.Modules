import React from 'react';
import { Field, reduxForm, stopAsyncValidation } from 'redux-form/immutable';
import { Container, Col, Row } from '../../../frecl/Components/React-Bootstrap-4-Grid/index';
import { passwordField, textField } from '../../../frecl/Form/FormComponents';
import { email, required, matchPassword, minLength } from '../../../frecl/Form/validators';
import ReactShow from 'react-show';
import { connect } from 'react-redux';
import InlineNotification from '../../Notifications/InlineNotification';


class SignIn extends React.Component {
  async handleSubmit(data) {
    return this.props.action('Firebase/signIn')(data.get('email'), data.get('password'));
  }

  clearNotifications() {
    this.props.action('Notificiations/clear')('signinForm');
  }

  render() {
    return (
      <Container>
        <Row justifyContent="center">
          <Col md="4" sm="6" xs="10">
            <h1>Sign In</h1>
            <form onChange={this.clearNotifications.bind(this)} onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>

              <Field
                name="email"
                component={textField}
                type="text"
                label="Your Email"
                autoFocus
                validate={[required, email]}
              />
              <Field
                name="password"
                component={textField}
                type="password"
                label="Password"
                placeholder="Your Password"
                validate={[required, minLength(5)]}
              />

              <InlineNotification className="inline-notification" id="signinForm" />

              <div className="form-element">
                <button
                  type="submit"
                  disabled={this.props.asyncValidating || this.props.pristine || this.props.submitting || this.props.invalid}
                >
                  { !this.props.submitting ? 'Sign In' : 'Submitting' }
                </button>
              </div>

            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}


const mstp = state => (
  state
);

export default reduxForm({
  form: 'signin',
})(SignIn);

