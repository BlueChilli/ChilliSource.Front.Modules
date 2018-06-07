/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "../../General/Error";
import FormElementWrapper from "../../helpers/FormElementWrapper";

import "./styles.css";

class CheckArrayVertical extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      values: {}
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.getCurrentValues = this.getCurrentValues.bind(this);
  }


  getCurrentValues() {
    return this.state.values;
  }


  componentWillMount() {

    const {
      input, meta: {dirty},
    } = this.props;
    if (!dirty) {

      // Map
      const flat = {};
      this.props.options.forEach(item => {
        const currentValue = input.value[item.id];

        if (currentValue !== undefined) {
          flat[item.id] = currentValue
        }
      });

      let foo = {};

      this.props.options.forEach(item => {
        foo[item.id] = flat[item.id] || false;
      });

      this.setState({values: foo});
      input.onChange(foo);
    }

  }


  changeHandler(event, id) {
    let values = this.getCurrentValues();
    values[id] = event.target.checked;
    this.setState({values});
    this.props.input.onChange(values);
  }

  render() {

    const {
      input, helperText, field, name, autoFocus, className, label, placeholder, type, meta: {
        active, touched, error, dirty, asyncValidating, meta,
      }, ...rest
    } = this.props;

    const invalid = touched && error;

    const classes = classNames({
      invalid,
    });

    const values = this.getCurrentValues();

    return (
      <FormElementWrapper {...this.props} _id="fe-checkarray-vertical">
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
            const isChecked = input.value[option.id];

            return (
              <div key={option.id} className="checkbox checkbox-vertical">
                <input
                  {...input}
                  defaultChecked={isChecked}
                  value={`${option.id}`}
                  className="checkbox-input"
                  onChange={e => {
                    input.onChange(values);
                    this.changeHandler(e, option.id);
                  }}
                  onBlur={e => {
                    input.onBlur(values);
                  }}
                  type="checkbox" id={htmlForId}/>
                <label className="checkbox-label" htmlFor={htmlForId}>{option.label}</label>
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

export default CheckArrayVertical;