import React from 'react';
import { Container } from '../../../frecl/Components/React-Bootstrap-4-Grid/index';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';


class Login extends React.Component {
  handleSubmit(e) {
    console.log('Sunmii', e);
  }

  componentWillMount() {
    if (this.props.sessionIsAuthenticated) {
      this.props.history.push('/');
    }
  }

  clickMe() {
    this.props.action('Firebase/test')();
  }

  render() {
    console.log('this might have stuff', this.props);
    //                <button onClick={this.props.sessionActions.login}>Click to Authenticate</button>
    return (
      <Container>
        <h1>Login</h1>
        <button onClick={this.clickMe.bind(this)}>Click to Test</button>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>First Name</label>
              <div>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                  value="woot"
                />
              </div>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}


export default reduxForm({
  form: 'signin', // a unique identifier for this form
})(Login);

