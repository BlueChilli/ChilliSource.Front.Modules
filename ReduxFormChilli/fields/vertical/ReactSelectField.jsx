/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "./Error";
import {isList} from "immutable";
import Select from "react-select";
import 'react-select/dist/react-select.css';
import {toJS, Iterable} from "immutable";

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

  // ensure values are POJOs
  props.input.value = Iterable.isIterable(props.input.value) ? props.input.value.toJS() : props.input.value;

  return (
    <div className="form-element">
      <label>{label || placeholder}</label>
      <div>
        <Select
          {...input}
          onBlur={() => {
            props.input.onBlur(props.input.value)
          }}
          multi={true}
          options={props.options.toJS()}
          value={ props.input.value }
        />
        <Error invalid={invalid}>{error}</Error>
      </div>
    </div>
  );
};

function multiChangeHandler(func) {
  return function handleMultiHandler(values) {
    func(values.map(value => value.value));
  };
}