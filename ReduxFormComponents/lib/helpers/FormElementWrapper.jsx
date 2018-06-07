import React from "react";
import classNames from "classnames";


const FormElementWrapper = (props) => {

  const {
    className, children, _id
  } = props;

  const formElementClasses = classNames({
    "form-element": true,
    [className]: className !== undefined,
    [_id]: _id !== undefined,
  });

  return (
    <div className={formElementClasses}>
      {children}
    </div>
  );

};

export default FormElementWrapper;