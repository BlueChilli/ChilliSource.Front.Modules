/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";

import "./styles.css";

class Radio extends React.Component {

  render() {

    const {
      input, helperText, field, name, autoFocus, className, label, placeholder, type, meta: {
        active, touched, error, dirty, asyncValidating, meta,
      }, ...rest
    } = this.props;

    const invalid = touched && error;

    const classes = classNames({
      "radio-input": true,
      invalid,
    });


    return (
      <FormElementWrapper {...this.props} _id="fe-radio-inline">
        {label &&
        <div className="form-label">
          <label>{label}</label>
        </div>
        }
        {helperText &&
        <div className="form-helpertext">
          {helperText}
        </div>
        }
        <div className="form-input">

          {this.props.options.map(option => {
            const random1 = Math.floor((Math.random() * 100000) + 1);
            const random2 = Math.floor((Math.random() * 100000) + 1);
            const htmlForId = `${input.name}-${random1}-${random2}`;
            const isChecked = option.id === input.value;

            return (
              <div key={option.id} className="radio radio-inline">
                <input
                  {...input}
                  defaultChecked={isChecked}
                  value={`${option.id}`}
                  className={classes}
                  type="radio" id={htmlForId}/>
                <label className="radio-label" htmlFor={htmlForId}>{option.label}</label>
              </div>
            )
          })}


        </div>

        <div className="form-error">
          <Error invalid={invalid}>{error}</Error>
        </div>
      </FormElementWrapper>
    )
      ;

  }


}

export default Radio;