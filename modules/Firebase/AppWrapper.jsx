import React, { Component } from 'react';
import { connect, compose } from 'react-redux';
import getFirebase from './helpers/getFirebase';
import userSelector from './selectors/user';
import firebase from 'firebase';
import { ModStack } from 'chillifront';

export default options => (WrappedComponent) => {
  class AuthAppWraper extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {};
    }


    componentDidMount() {
      const firebase = getFirebase(options)();
      // Observer user change
      firebase.auth().onAuthStateChanged(() => {
        this.props.dispatch(ModStack.getActionByID('Firebase/updateUserData')());
      });
    }

    componentWillReceiveProps(nextProps) {
      // Observe LOGOUT Action
      if (this.props.user.isAuthenticated !== nextProps.user.isAuthenticated && !nextProps.user.isAuthenticated) {
        this.props.history.push('/fbaccount/logout');
      }
    }

    render() {
      if (this.props.initialising) return <div className="loadfbspinner" />;
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return connect(mstp)(AuthAppWraper);
};

const mstp = state => ({
  initialising: !state.hasIn(['firebase', 'user', 'loggedIn']),
  user: userSelector(state),
});
