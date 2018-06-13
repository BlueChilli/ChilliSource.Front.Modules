import React, {Fragment} from 'react'
import {connect} from "react-redux";
import {modalIsOpen} from "./selectors";
import {hideModal, showModal} from "./actions";

class ReduxModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  closeHandler() {
    this.props.dispatch(hideModal(this.props.id));
  }

  componentDidMount() {
    if (this.props.open === true) {
      this.props.dispatch(showModal(this.props.id, this.props.meta));
    }
    // Close if ESC is hit

    if (this.props.noEsc !== true) {
      document.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
          this.props.dispatch(hideModal(this.props.id));
        }
      }, false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", () => {
    }, false);
  }

  render() {
    return (
      <Fragment>
        {this.props.isOpen &&
        <Fragment>
          {this.props.children(this.closeHandler.bind(this))}
        </Fragment>
        }
      </Fragment>
    )
  }
}

const mstp = (state, props) => {
  return {
    isOpen: modalIsOpen(state)(props.id)
  }

};

export default connect(mstp)(ReduxModal);