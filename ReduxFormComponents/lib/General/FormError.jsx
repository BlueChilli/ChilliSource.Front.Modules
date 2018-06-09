/* eslint-disable */
import React from "react";
import ReactShow from "react-show";
import get from "lodash/get";
import "../fontawesome";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamation from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';

const FormError = ({invalid, error}) => {

  if (!get(error, "errorMessage")) return null;
  const errorArray = get(error, "errors");
  return (
    <ReactShow show={invalid}>

      <div key="1" className="form-error">
        {errorArray.map((errorString,k) => (
          <div key={k} style={{marginBottom:"8px"}}>
            <FontAwesomeIcon icon={faExclamation}/>
            <span style={{"marginLeft": "8px"}}>{errorString}</span>
          </div>
        ))}
      </div>

    </ReactShow>
  );
};


export default FormError;