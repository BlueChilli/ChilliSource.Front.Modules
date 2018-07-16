/* eslint-disable */
import React from "react";
import classNames from "classnames";

/** Components */
import Error from "../../General/Error";
import TextField from "../TextField";
import FormElementWrapper from "../../helpers/FormElementWrapper";

class TextFieldWithSubmit extends React.Component {
  render() {
    const { submitText = "Submit", className = "", ...inputProps } = this.props;

    return (
      <FormElementWrapper {...this.props} _id="fe-textfieldwithsubmit">
        {/* Input With Submit */}
        <div className={`form-element flex bottom ${className}`}>
          <div className="flex-item width-70">
            <TextField {...inputProps} />
          </div>

          <div className="flex-item width-30 padding-left-1">
            <button type="submit" className="button-submit">
              {submitText}
            </button>
          </div>
        </div>
      </FormElementWrapper>
    );
  }
}

export default TextFieldWithSubmit;
