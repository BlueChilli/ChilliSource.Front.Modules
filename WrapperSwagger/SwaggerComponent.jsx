import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadswagger from './lib/loadswagger';
import './css.css';


export default options => (WrappedComponent) => {
  class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        failed: false,
      };
    }

    render() {
      if (this.state.loaded) {
        return <WrappedComponent {...this.props} />;
      } else if (this.state.failed) {
        return (<div className="swagger-error">
          <h1>application failed to start</h1>
          <p>please try again in a few minutes.</p>
        </div>);
      } return <div className="edbspinner" />;
    }


    componentWillMount() {
      loadswagger({ apiBaseURL: options.apiBaseURL, apiKey: options.apiKey }).then((foo) => {
        this.setState({ loaded: true });
      }).catch((error) => {
        console.error('Swagger Failed', error);
        this.setState({ failed: true });
      });
    }
  }

  const mapStateToProps = (state, ownProps) => ({});

  return connect(
    mapStateToProps,
    null,
  )(Test);
};
