import React from "react";
import scriptLoader from "react-async-load-script";

export default ({ trackingId }) => WrappedComponent => {
  class Ga extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoaded: false };
    }

    shouldComponentUpdate(prevProps) {
      if (
        prevProps.isScriptLoadSucceed !== this.props.isScriptLoadSucceed &&
        prevProps.isScriptLoadSucceed
      ) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        this.setState({ isLoaded: true });
        gtag("js", new Date());
        gtag("config", `${trackingId}`);
      }

      return true;
    }

    render() {
      const { isLoaded } = this.state;
      const { isScriptLoadSucceed, isScriptLoaded, ...rest } = this.props;
      return isLoaded && <WrappedComponent {...rest} />;
    }
  }

  return scriptLoader([
    `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
  ])(Ga);
};
