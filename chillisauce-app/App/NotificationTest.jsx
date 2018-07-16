import React from 'react'
import {connect} from "react-redux";
import {showNotification} from "../../modules/Notification/actions";
import Notification from "../../modules/Notification/Notification";

class NotificationTest extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  //export const showNotification = (id, text, level = 'success', time = 4000)
  render() {
    return (
      <div>
        <h1>Notification Demo</h1>

        <button onClick={() => {
          this.props.dispatch(showNotification("testNotification", 1000));
        }}>Click Me To Show a Notification!
        </button>

        <Notification id="testNotification" >
          <div>I AM A NOTIFICATION!</div>
        </Notification>

      </div>
    )
  }
}


export default connect()(NotificationTest);