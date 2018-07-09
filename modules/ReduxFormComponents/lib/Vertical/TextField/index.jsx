/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";

export default props => {
  const {
    input,
    helperText,
    name,
    autoFocus,
    className,
    label,
    placeholder,
    type,
    meta: { active, touched, error, dirty, asyncValidating }
  } = props;
  const invalid = touched && error;

  const classes = classNames({
    invalid
  });

  return (
    <FormElementWrapper {...props} _id="fe-textfield">
      {/* Label */}
      <div className="form-label">
        <label>{label || placeholder}</label>
      </div>

      {/* Helper Text */}
      {helperText && <div className="form-helper">{helperText}</div>}

      {/* Input Component */}
      <div className="form-input">
        <input
          {...input}
          className={`${classes} padding-1`}
          autoFocus={autoFocus}
          placeholder={placeholder || label}
          type={type || "text"}
        />
      </div>

      {/* Error */}
      <div className="form-error">
        <Error invalid={invalid}>{error}</Error>
      </div>
    </FormElementWrapper>
  );
};
