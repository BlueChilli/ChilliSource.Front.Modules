import React from 'react'
import {connect} from "react-redux";
import get from "lodash/get";
import {clearNotification} from "./actions";

import WrapperSimple from "./WrapperSimple";


class Notification extends React.Component {
  render() {
    return (
      <this.props.wrapper {...this.props}>
        {this.props.children}
      </this.props.wrapper>
    )
  }
}

const mstp = (state, props) => {
  return {
    isOpen: get(state, ['notifications', props.id, 'isOpen']) || props.show,
    meta: get(state, ['notifications', props.id, 'meta']) || {}
  }
};

const mdtp = dispatch => {
  return {
    closeHandler: () => dispatch(clearNotification(id))
  }
};


Notification.defaultProps = {
  wrapper: WrapperSimple
};

export default connect(mstp, mdtp)(Notification);