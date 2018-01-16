import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Row, Col, FormGenerator, InputMapper } from '../../../Frecl/exports';
import { Input } from 'cs.forms';

const Login = ({ onSubmitSuccess, onForgotPassword }) => (
  <Row>
    <Col cols="desktop-4 tablet-6" offset="desktop-4 tablet-3">
      <h1><span className="icon icon-user" /> Login</h1>
      <FormGenerator stateName="SESSION" apiType="User" apiVerb="Login" onSubmitSuccess={onSubmitSuccess}>
        <InputMapper name="email" component={<Input />} />
        <InputMapper name="password" component={<Input type="password" />} />
      </FormGenerator>
      <div>
        <br />
        <a href="#" onClick={onForgotPassword}>Forgot password?</a>
      </div>
    </Col>
  </Row>
);

const mapDispatchToProps = dispatch => ({
  onSubmitSuccess: () => {
    // createDispatchGetAction(dispatch, loginApi)("ACCOUNT").then(() => {
    dispatch(push('/app'));
    // });
  },

  onForgotPassword: () => {
    dispatch(push('/account/forgotPassword'));
  },
});


export default connect(null, mapDispatchToProps)(Login);
