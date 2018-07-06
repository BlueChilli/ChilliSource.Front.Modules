/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";

export default (props) => {


  const {
    input, helperText, name, autoFocus, className, label, placeholder, labelRight, type, meta: {
      active, touched, error, dirty, asyncValidating
    },
  } = props;
  const invalid = touched && error;

  const classes = classNames({
    invalid,
  });

  const confirmLabel = "Confirm " + label;

  return (
    <div>
      <FormElementWrapper {...props} _id="fe-passwordconfirm">
        <div className="form-label">
          <label>{label || placeholder}</label>
          {labelRight &&
          <span className="form-label-right">{labelRight}</span>
          }
        </div>
        {helperText &&
        <div className="form-helpertext">
          {helperText}
        </div>
        }
        <div className="form-input">
          <input
            {...input}
            className={classes}
            autoFocus={autoFocus}
            placeholder={placeholder || label}
            type={type || "password"}
          />
        </div>

        <div className="form-error">
          <Error invalid={invalid}>{error}</Error>
        </div>
      </FormElementWrapper>
      <FormElementWrapper {...props} _id="fe-passwordconfirm">
        <div className="form-label">
          <label>{confirmLabel}</label>
          {labelRight &&
          <span className="form-label-right">{labelRight}</span>
          }
        </div>
        {helperText &&
        <div className="form-helpertext">
          {helperText}
        </div>
        }
        <div className="form-input">
          <input
            {...input}
            className={classes}
            autoFocus={autoFocus}
            placeholder={placeholder || label}
            type={type || "password"}
          />
        </div>

        <div className="form-error">
          <Error invalid={invalid}>{error}</Error>
        </div>
      </FormElementWrapper>
    </div>
  );
};