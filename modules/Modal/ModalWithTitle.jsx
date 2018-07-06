import React, {Fragment} from "react";
import "./modal.css";
import ReduxModal from "./ReduxModal";

export default class ModalWithTitle extends React.Component {

  render() {

    const {id, title} = this.props.meta;

    return (
      <ReduxModal {...this.props}>
        {(closeHandler) => {
          return (
            <div>
              <div className="modal-overlay" aria-hidden="true"/>
              <div className="modal-wrapper" aria-hidden="true">
                <div className="modal-box">
                  <div className="modal-header">
                    <div className="text">{title}</div>
                    <div className="close">
                <span onClick={() => {
                  closeHandler();
                }}>x</span>
                    </div>
                  </div>
                  <div className="modal-content">
                    {this.props.winning}
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

ModalWithTitle.defaultProps = {
  meta: {}
};