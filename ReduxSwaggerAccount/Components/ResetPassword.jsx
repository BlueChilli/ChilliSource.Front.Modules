import React from 'react';
import * as queryString from "query-string";
import {Field} from "redux-form";
import {push} from 'react-router-redux';
import {SwaggerData, SwaggerForm, swaggerLoader} from "../../ReduxSwagger/lib/ReduxFormSwagger/index";
import {createSession} from "../actions";
import HiddenField from "../../ReduxFormComponents/lib/Vertical/HiddenField/HiddenField";
import Password from "../../ReduxFormComponents/lib/Vertical/Password/Password";
import required from "../../ReduxFormComponents/lib/validators/required";
import matchPassword from "../../ReduxFormComponents/lib/validators/matchPassword";
import {SubmitButton} from "../../ReduxFormComponents/lib/General/SubmitButton";
import FormError from "../../ReduxFormComponents/lib/General/FormError";
import {apiPost} from "../../ReduxSwagger/lib/ReduxFormSwagger/data/apiCreators";
import {Link} from "react-router-dom";
import log from "../../ReduxBCLog/log";

class Invite extends React.Component {

  render() {
    const {Email, Token} = queryString.parse(this.props.location.search);

    return (
      <SwaggerData id="get/api/v1/useraccount/bytoken" data={{email: Email, token: Token}}
                   onError={() => <TokenProblem/>} debug={true}>
        {context => {
          context = Object.assign(context, {Token});
          return (
            <div>
              <h1 style={{paddingBottom: "32px"}}>Change Password</h1>
              <SwaggerForm initialValues={context} id="patch/api/v1/useraccount/bytoken"
                           onSuccess={(payload, dispatch, formData) => {
                             dispatch(log("account-resetpassword", payload));
                             apiPost("post/api/v1/web/usersession", {
                               email: Email,
                               password: formData.values.password
                             }).then(payload => {
                               dispatch(createSession(payload));
                               dispatch(push('/app'));
                             });
                           }}>
                {reduxForm => (
                  <div>
                    <InfoElement label="Name" data={`${context.firstName} ${context.lastName}`}/>
                    <InfoElement label="Email address" data={context.email}/>
                    <Field name="Token" component={HiddenField}/>
                    <Field name="password" label="Password" component={Password} validate={required}
                           autoFocus={true}/>
                    <Field name="_matchpassword" label="Confirm Password" component={Password}
                           validate={matchPassword}/>
                    <SubmitButton {...reduxForm} value="Log in"/>
                    <FormError {...reduxForm}/>
                  </div>
                )}
              </SwaggerForm>
            </div>
          )
        }}
      </SwaggerData>
    );
  }
}

const InfoElement = ({label, data}) => {

  return (
    <div className="form-element">
      <div className="form-label">
        {label}
      </div>
      <div className="form-input">
        {data}
      </div>
    </div>
  );

};


export default swaggerLoader(Invite);


const TokenProblem = () => (
  <div>
    <h1>Error</h1>
    <p style={{color: 'red'}}>You can no longer reset your password using this address. You will need to
      {" "}<Link to="/account/resetPasswordInit">reset your password again</Link></p>
  </div>
);