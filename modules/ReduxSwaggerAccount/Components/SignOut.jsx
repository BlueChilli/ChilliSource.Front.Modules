import React from 'react'
import {connect} from 'react-redux';
import {deleteSession} from "../actions";
import {swaggerLoader, apiGet} from "../../ReduxSwagger/lib/ReduxFormSwagger/index";

class SignOut extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {"signedOut": false};
  }

  componentDidMount() {
    apiGet("delete/api/v1/web/usersession").then((payload) => {
      this.setState({signedOut: true});
      this.props.dispatch(deleteSession(payload));
    });
  }

  render() {
    return (
      !this.state.signedOut ? null : this.props.children
    );
  }
}

export default connect()(swaggerLoader(SignOut));