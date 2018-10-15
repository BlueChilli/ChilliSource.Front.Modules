import React from 'react';
import { Field, reduxForm, stopAsyncValidation } from 'redux-form/immutable';
import { Container, Col, Row } from '../../../frecl/Components/React-Bootstrap-4-Grid/index';
import { passwordField, textField } from '../../../frecl/Form/FormComponents';
import { email, required, matchPassword, minLength } from '../../../frecl/Form/validators';
import ReactShow from 'react-show';
import { connect } from 'react-redux';
import InlineNotification from '../../Notifications/InlineNotification';


class Register extends React.Component {
  async handleSubmit(data) {
    return this.props.action('Firebase/register')(data.get('email'), data.get('password'));
  }

  clearNotifications() {
    this.props.action('Notificiations/clear')('registerForm');
  }

  render() {
    console.log('test props', this.props);
    return (
      <Container>
        <Row justifyContent="center">
          <Col md="4" sm="6" xs="10">
            <h1>Register Now</h1>
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
                placeholder="Choose a Password"
                validate={[required, minLength(5)]}
              />
              <Field
                name="password_verify"
                component={textField}
                type="password"
                label="Verify Password"
                validate={matchPassword}
              />

              <InlineNotification className="inline-notification" id="registerForm" />


              <div className="form-element">
                <button
                  type="submit"
                  disabled={this.props.asyncValidating || this.props.pristine || this.props.submitting || this.props.invalid}
                >
                  { !this.props.submitting ? 'Register' : 'Submitting' }
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

const RegisterConnect = connect(mstp)(Register);

export default reduxForm({
  form: 'register',
})(Register);

