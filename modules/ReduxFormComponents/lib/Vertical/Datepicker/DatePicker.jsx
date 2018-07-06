/* eslint-disable */
import React from "react";
import classNames from "classnames";
import FormElementWrapper from "../../helpers/FormElementWrapper";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Error from "../../General/Error";
import "./DatePicker.css";

export default (props) => {

  const {
    input, name, helperText, autoFocus, className, label, placeholder, type, meta: {
      active, touched, error, dirty, asyncValidating, dateFormat
    },
  } = props;
  const invalid = touched && error;

  const classes = classNames({
    invalid,
  });

  if (!dirty && input.value) {
    input.onChange(moment(input.value).format(dateFormat));
  }
  return (
    <FormElementWrapper {...props} _id="fe-datepicker">
      <div className="form-label">
        <label>{label || placeholder}</label>
      </div>
      {helperText &&
      <div className="form-helpertext">
        {helperText}
      </div>
      }
      <div className="form-input">
        <DatePicker
          {...props}
          className={classes}
          placeholder={placeholder || label}
          dateFormat={props.dateFormat || "MMM Do, YYYY"}
          selected={input.value ? moment(input.value, dateFormat) : null}
          onChange={(date) => {
            input.onChange(date ? moment(date).format(dateFormat) : "");
          }}
        />

      </div>

      <div className="form-error">
        <Error invalid={invalid}>{error}</Error>
      </div>

    </FormElementWrapper>
  );
};
