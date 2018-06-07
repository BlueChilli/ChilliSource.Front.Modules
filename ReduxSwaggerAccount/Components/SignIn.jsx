import React from 'react'
import SwaggerForm from "../../ReduxSwagger/lib/ReduxFormSwagger/Components/SwaggerForm";
import {Field} from "redux-form";
import TextField from "../../ReduxFormComponents/lib/Vertical/TextField/TextField";
import Password from "../../ReduxFormComponents/lib/Vertical/Password/Password";
import {SubmitButton} from "../../ReduxFormComponents/lib/General/SubmitButton";
import required from "../../ReduxFormComponents/lib/validators/required";
import FormError from "../../ReduxFormComponents/lib/General/FormError";
import email from "../../ReduxFormComponents/lib/validators/email";
import {createSession} from "../actions";
import {push} from 'react-router-redux';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {sessionExists} from "../selectors";

class SignIn extends React.Component {

  success(payload, dispatch) {
    dispatch(createSession(payload));
    dispatch(push('/app'));
  }

  componentDidMount() {
    if (this.props.sessionExists === true) {
      this.props.dispatch(push('/app'));
    }
  }

  render() {
    return (
      <SwaggerForm id="post/api/v1/web/usersession" onSuccess={this.success}>
        {context => {
          return (
            <div>
              <Field name="email" label="Email Address" component={TextField} validate={email} autoFocus={true}/>
              <Field name="password" label="Password" component={Password}
                     labelRight={<Link to="/account/resetPasswordInit">Forgot password?</Link>}
                     validate={required}/>
              <SubmitButton {...context} value="Log in"/>
              <FormError {...context}/>
            </div>
          )
        }}
      </SwaggerForm>
    )
  }
}

const mstp = state => {
  return {
    sessionExists: sessionExists(state)
  }
};


export default connect(mstp)(SignIn);