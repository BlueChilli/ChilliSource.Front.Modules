/* eslint-disable */
import React, {Fragment} from "react";
import ReactShow from "react-show";

export default ({children, invalid}) => {
  if (children === undefined) children = <span/>;
  console.log("HELP", children, invalid);
  return (
    <Fragment>
      <ReactShow show={invalid}>
        <div key="1" className="error-text">
          {children}
        </div>
      </ReactShow>
    </Fragment>
  );
}