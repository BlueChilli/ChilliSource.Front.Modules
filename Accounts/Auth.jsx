import React, { Component } from 'react';
import { connect } from 'react-redux';

export default WrappedComponent => class EmptyModule extends Component {
  componentWillMount() {
    if (!this.props.sessionIsAuthenticated) {
      this.props.history.push(`/account/login/?x=${this.props.location.pathname}`);
    }
  }

  render() {
    return (
      this.props.sessionIsAuthenticated) ?
        <WrappedComponent {...this.props} />
      :
        <span />;
  }
};

