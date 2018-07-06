import React from "react";
import "./modal.css";
import ReduxModal from "./ReduxModal";

export default class ModalWithoutTitle extends React.Component {

  render() {
    return (
      <ReduxModal {...this.props}>
        {(closeHandler) => {
          return (
            <div>
              <div className="modal-overlay" aria-hidden="true"/>
              <div className="modal-wrapper" aria-hidden="true">
                <div className="modal-box">
                  <div className="modal-content">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          )
        }}

      </ReduxModal>
    )
  }
}

ModalWithoutTitle.defaultProps = {
  meta: {}
};