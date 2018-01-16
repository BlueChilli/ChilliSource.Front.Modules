import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  class AuthAppWraper extends Component {
    componentWillReceiveProps(nextProps) {
      // Observe LOGIN Action
      if (this.props.isAuthenticated !== nextProps.isAuthenticated && nextProps.isAuthenticated) {
        // If authenticated, redirect
        this.props.history.push('/');
      }

      // Observe LOGOUT Action
      if (this.props.isAuthenticated !== nextProps.isAuthenticated && !nextProps.isAuthenticated) {
        this.props.history.push('/account/logout');
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return connect(mstp)(AuthAppWraper);
};


const mstp = state => ({
  isAuthenticated: state.getIn(['session', 'authenticated']),
});
