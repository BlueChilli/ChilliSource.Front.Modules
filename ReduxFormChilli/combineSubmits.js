import React, {Fragment} from "react";

/**
 *
 * Allow you to combine 2 submit functions.
 *
 *
 * @param submitFunction
 * @returns {function(*)}
 */

export default (submitFunction) => {
  return (FormComponent) => {
    return props => {
      const newSubmitter = !props.onSubmit ?
        (payload, dispatch, props) => {
          return Promise.resolve(true);
        } : props.onSubmit;

      const newOnSubmitProp = (payload, dispatch, props) => {
        return submitFunction(payload, dispatch, props).then(res => newSubmitter(payload, dispatch, props));
      };
      return <FormComponent  {...props} onSubmit={newOnSubmitProp}/>
    };

  };
};