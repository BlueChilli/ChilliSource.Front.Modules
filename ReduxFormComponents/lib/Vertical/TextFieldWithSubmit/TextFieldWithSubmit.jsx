/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";
import "./style.css";

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
    <FormElementWrapper {...props} _id="fe-textfieldwithsubmit">
      <div className="form-label">
        <label>{label || placeholder}</label>
      </div>
      {helperText &&
      <div className="form-helpertext">
        {helperText}
      </div>
      }
      <div className="form-input">
        <div className="tfws-wrapper">
          <div className="tfws-field">
            <input
              {...input}
              className={classes}
              autoFocus={autoFocus}
              placeholder={placeholder || label}
              type={type || "text"}
            />
          </div>
          <div className="tfws-btn">
            <button type="submit" className="button-submit">{props.submitText || "Submit"}</button>
          </div>
        </div>
      </div>

      <div className="form-error">
        <Error invalid={invalid}>{error}</Error>
      </div>
    </FormElementWrapper>
  );
};