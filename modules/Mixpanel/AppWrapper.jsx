import React from 'react';
import mixpanel from 'mixpanel-browser';

export default ({token}) => WrappedComponent => class Test extends React.Component {
  render() {
    return <WrappedComponent {...this.props} />;
  }

  componentDidMount() {
    if (token) {
      mixpanel.init(token);
    }
  }
};

