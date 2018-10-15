import React from "react";
import scriptLoader from "react-async-load-script";

export default ({ scripts }) => WrappedComponent => {
  class CustomScriptLoader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoaded: false };
    }

    shouldComponentUpdate(prevProps) {
      if (
        prevProps.isScriptLoadSucceed !== this.props.isScriptLoadSucceed &&
        prevProps.isScriptLoadSucceed
      ) {
        this.setState({ isLoaded: true });
      }
      return true;
    }

    render() {
      const { isLoaded } = this.state;
      const { isScriptLoadSucceed, isScriptLoaded, ...rest } = this.props;
      return isLoaded && <WrappedComponent {...rest} />;
    }
  }

  return scriptLoader(scripts)(CustomScriptLoader);
};
