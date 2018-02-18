import React from "react";
import ReactShow from "react-show";

import "./form.css";

export const Button = (props) => {
  // If there are initialValues
  let buttonText;
  if (props.initialValues) {
    buttonText = props.valueEditing ? props.valueEditing : "props.valueEditing missing";
  } else {
    buttonText = props.value;
  }
  return (
    <div className="form-element">
      <button
        type="submit"
        disabled={props.asyncValidating || props.submitting || props.invalid}
      >
        {!props.submitting ? buttonText : props.valueSubmitting}
      </button>
    </div>
  );
};


export const Error = props => {
  const {invalid, error} = props;
  return (
    <ReactShow show={invalid && error}>
      <div key="1" className="form-error-text">
        {error}
      </div>
    </ReactShow>
  );
}