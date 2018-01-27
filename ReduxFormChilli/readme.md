# ReduxForm Module

Docs are at [https://redux-form.com](https://redux-form.com)

## Example

```js
import React, {Fragment} from "react";
import {Field, reduxForm} from "redux-form/immutable";

let ProfileForm = ({handleSubmit, pristine, submitting}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>First Name</label>
      <div>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>
    </div>
    <div>
      <label>Last Name</label>
      <div>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder='Last Name'
        />
      </div>
    </div>
    <div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </div>
  </form>
);


ProfileForm = reduxForm({form: "profile"})(ProfileForm);

class ProfilePage extends React.Component {

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Fragment>
        <h2>Profile Form</h2>
        <ProfileForm onSubmit={this.handleSubmit}/>
      </Fragment>
    );
  }
}

export default ProfilePage;
```