import React, {Fragment} from "react";
import "./modal.css";
import {Map} from "immutable";

export default class ModalWrapper extends React.Component {


  render() {


    const id = this.props.meta.get("id");
    const title = this.props.meta.get("title") || "No Title Defined";

    return (
      <Fragment>
        <div className="modal-overlay" aria-hidden="true"/>
        <div className="modal-wrapper" aria-hidden="true">
          <div className="modal-box">
            <div className="modal-header">
              <div className="text">{title} (#{id})</div>
              <div className="close">
                <span onClick={() => {
                  this.props.closeHandler();
                }}>x</span>
              </div>
            </div>
            <div className="modal-content">
              {this.props.children}
            </div>

          </div>
        </div>
      </Fragment>
    )
  }
}

ModalWrapper.defaultProps = {
  meta: Map()
};