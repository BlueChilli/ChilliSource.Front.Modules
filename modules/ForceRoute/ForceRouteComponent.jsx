import React from 'react';

export default route => WrappedComponent => class ForceRouteComponent extends React.Component {
  render() {
    return <WrappedComponent {...this.props} />;
  }

  componentDidMount() {
      this.props.history.push(route)
  }
};

