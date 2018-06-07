/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";

export default (props) => {

  const {
    input, helperText, name, autoFocus, className, label, placeholder, type, meta: {
      active, touched, error, dirty, asyncValidating,
    },
  } = props;
  const invalid = touched && error;

  const classes = classNames({
    invalid,
  });

  return (
    <input
      {...input}
      className={classes}
      autoFocus={autoFocus}
      placeholder={placeholder || label}
      type={type || "hidden"}
    />
  );
};