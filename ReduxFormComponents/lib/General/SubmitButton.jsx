import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

export const SubmitButton = (props) => {
  // If there are initialValues
  let buttonText;
  if (props.initialValues) {
    buttonText = props.valueEditing ? props.valueEditing : "Submit";
  } else {
    buttonText = props.value || "Submit";
  }

  const Spinner = (
    <span>
      <FontAwesomeIcon icon={faSpinner} spin/>
      <span style={{marginLeft: "8px"}}>{props.valueSubmitting || "Submitting"}</span>
    </span>
  );
  return (
    <div className="form-element">
      <button
        type="submit"
        disabled={props.asyncValidating || props.submitting || props.invalid}
      >
        {!props.submitting ? buttonText : Spinner}
      </button>
    </div>
  );
};