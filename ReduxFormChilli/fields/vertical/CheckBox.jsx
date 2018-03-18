/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "./Error";

export default (props) => {

  const {
    input, name, autoFocus, label, placeholder, type, meta: {
      active, touched, error, dirty, asyncValidating,
    },
  } = props;
  const invalid = touched && error;

  const classes = classNames({
    invalid,
  });
  console.log("SAUCE", props);
  return (
    <div className="form-element checkbox">

      <div>

        <input {...input}
               type="checkbox"
               className={classes}
               id={input.name}
               checked={input.value}
        /> <span><label htmlFor={input.name}>{label || placeholder}</label></span>

        <Error invalid={invalid}>{error}</Error>
      </div>
    </div>
  );
};