import React from 'react'
import {Field, reduxForm, Form} from "redux-form/immutable";
import {TextField} from "../../../modules/ReduxFormChilli/fields/vertical";
import {Button, Error} from "../../../modules/ReduxFormChilli/components";
import {minLength, required} from "../../../modules/ReduxFormChilli/validators";

const minLength5 = minLength(5);

export const FormStuff = props => {
  const {handleSubmit} = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        autoFocus
        name="name"
        component={TextField}
        type="text"
        label="Name"
        placeholder="Name of that thing!"
        validate={required}
      />
      <Field
        name="random"
        component={TextField}
        type="text"
        placeholder='Say Something Random'
        validate={[required, minLength5]}
      />
      <Button value="Add That Thing" valueEditing="Save That Thing" valueSubmitting="Submitting" {...props}/>
      <Error {...props}/>
    </Form>
  );
};

export default reduxForm({form: "addform"})(FormStuff);