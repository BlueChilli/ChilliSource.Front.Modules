import React, {Fragment} from "react";
import "./modal.css";
import {Map} from "immutable";

export default class ModalWrapperContentOnly extends React.Component {


  render() {

    return (
      <Fragment>
        <div className="modal-overlay" aria-hidden="true"/>
        <div className="modal-wrapper" aria-hidden="true">
          <div className="modal-box">
            <div className="modal-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

ModalWrapperContentOnly.defaultProps = {
  meta: Map()
};