import React from "react";
import classNames from "classnames";
import Error from "./Error";
import {isList} from "immutable";

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

  return (
    <div className="form-element">
      <label>{label || placeholder}</label>
      <div>
        <select
          {...input}
          className={classes}
          type={type}
        >
          <option value="">-- Please Select --</option>
          {props.options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <Error invalid={invalid}>{error}</Error>
      </div>
    </div>
  );
};