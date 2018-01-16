import React, { Component } from 'react';

export default WrappedComponent => class EmptyModule extends Component {
  componentWillMount() {
    if (this.props.user.isAuthenticated !== true) {
      this.props.history.push(`/fbaccount/signin/?x=${this.props.location.pathname}`);
    }
  }

  render() {
    console.log('fb auth wrapper!', this.props.user.isAuthenticated);
    return (
      this.props.user.isAuthenticated === true) ?
        <WrappedComponent {...this.props} />
      :
        <span />;
  }
};

