/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";

import "./styles.css";

class CheckSimple extends React.Component {
  componentWillUpdate(nextProps) {
    const { input, dirty } = nextProps;

    if (input.value !== true) input.value = false;
    const isChecked = dirty ? input.value : nextProps.checked || input.value;
    input.onChange(isChecked);
  }

  componentWillMount() {
    const {
      input,
      name,
      autoFocus,
      className,
      label,
      placeholder,
      type,
      meta: { active, touched, error, dirty, asyncValidating, meta }
    } = this.props;

    if (input.value !== true) input.value = false;
    const isChecked = dirty ? input.value : this.props.checked || input.value;
    input.onChange(isChecked);
  }

  render() {
    const props = this.props;
    const random1 = Math.floor(Math.random() * 100000 + 1);
    const random2 = Math.floor(Math.random() * 100000 + 1);

    const {
      input,
      name,
      helperText,
      autoFocus,
      className,
      label,
      placeholder,
      type,
      meta: { active, touched, error, dirty, asyncValidating, meta }
    } = this.props;

    const htmlForId = `${input.name}-${random1}-${random2}`;

    const invalid = touched && error;

    const classes = classNames({
      invalid
    });

    const isChecked = dirty ? input.value : props.checked || input.value;

    return (
      <FormElementWrapper {...props} _id="fe-check-simple">
        <div className="form-input">
          <div className="checkbox checkbox-inline">
            <input
              defaultChecked={isChecked}
              {...input}
              className="checkbox-input"
              type="checkbox"
              id={htmlForId}
            />
            <label className="checkbox-label" htmlFor={htmlForId}>
              {label}
            </label>
          </div>
        </div>
        {helperText && <div className="form-helpertext">{helperText}</div>}
        <div className="form-error">
          <Error invalid={invalid}>{error}</Error>
        </div>
      </FormElementWrapper>
    );
  }
}

export default CheckSimple;
