import React from "react";
import {connect} from "react-redux";
import {clearNotification} from "./actions";
import {Map} from "immutable";
import ReactShow from "react-show";

export const createNotificationComponent = id => {

  const mstp = state => {
    return {
      notification: state.getIn(["notifications", id]) || Map()
    }
  };

  const mdtp = dispatch => {
    return {
      closeHandler: () => dispatch(clearNotification(id))
    }
  };

  return (Wrapper) => {
    class NotifWrapperClass extends React.Component {
      render() {

        return (
          <ReactShow show={this.props.notification.size > 0}>
            <Wrapper notification={this.props.notification} closeHandler={this.props.closeHandler}/>
          </ReactShow>
        )

      }
    }

    return connect(mstp, mdtp)(NotifWrapperClass);

  }

};