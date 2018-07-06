/*
  Higher order component which prevents unauthorized access to a component
 */

import React from 'react';
import {connect} from 'react-redux';
import get from "lodash/get";
import {push} from 'react-router-redux'

const allowAuth = Component => {

  class IsAuthenticated extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        sessionExists: false
      };
    }


    componentWillMount() {
      if (!this.props.sessionExists) {
        this.props.dispatch(push('/account/signin'));
      }
    }

    render() {
      if (this.props.sessionExists) {
        return (
          <Component {...this.props}/>
        )
      } else {
        return null;
      }
    }
  }

  const mstp = (state) => {
    return {
      sessionExists: get(state, "account.sessionExists")
    }
  };

  return connect(mstp)(IsAuthenticated);

};

export default allowAuth;