import React from 'react'
import set from "lodash/set";
import PropTypes from 'prop-types';

import {compose} from 'redux';
import {apiCreator} from "../data/apiCreators";
import {connect} from 'react-redux';
import get from "lodash/get";
import swaggerLoaderDecoratorCreator from "./swaggerLoaderDecoratorCreator";
import {getMockMode} from "../configuration";

// Is is probably really bad, but if you find me a working alternative, then awesome.
let isMounted = false;


const SwaggerDataCreator = (Spinner, GenericError) => {

  class SwaggerData extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        uid: "SwaggerData:" + Math.floor(Math.random() * 0xFFFF),
        data: undefined,
        dataModified: undefined,
        isLoaded: false,
        hasError: false,
        errorResponse: undefined
      };
    }

    getUtils() {
      return {
        refresh: () => {
          console.log("AWESOME REFRESHED")
        },
        set: (path, value) => {
          const data = set(this.state.data, path, value);
          this.setState({data: data});
        }
      }
    }


    processData(data) {
      if (this.props.debug === true) {
        console.log("SWAGGER_DATA", this.props.id, data);
      }

      let dataModified;
      if (this.props.modifyData) {
        dataModified = this.props.modifyData(data);
        if (this.props.debug === true) {
          console.log("SWAGGER_DATA_MODIFIED", this.props.id, dataModified);
        }
      }

      if (this.props.saveState) {
        const target = this.props.saveState;
        this.props.dispatch({
          type: "@@bcswagger/SAVESTATE/FLAT",
          payload: {
            target,
            data: data,
            dataModified: dataModified,
            id: this.props.id
          }
        });

      }


      this.props.dispatch({
        type: "@@bcswagger/APISUCCESS/" + this.props.id,
        payload: {
          data: data,
          dataModified: dataModified,
          id: this.props.id
        }
      });


      // To prevent race condition where it tries to apply
      // state to an unmounted component
      if (isMounted === false) {
        return;
      } else {
        this.setState({dataModified, data, isLoaded: true});
      }
    }

    componentDidMountForMockMode() {
      this.processData(this.props.mockData);
    }

    componentDidMount() {
      isMounted = true;

      if (getMockMode() === true) {
        return this.componentDidMountForMockMode();
      }

      const apiParams = {
        queryString: this.props.queryString,
        path: this.props.path,
        data: this.props.data,
        method: this.props.method
      };

      apiCreator(this.props.id, apiParams).then(data => {
        this.processData(data);
      }).catch(apiPayload => {

        const responseData = get(apiPayload, "response.data");
        const status = get(apiPayload, "response.status") || "networkerror";

        this.props.dispatch({
          type: "@@bcswagger/APIERROR",
          payload: {
            data: {data: responseData, status},
            id: this.props.id
          }
        });
        this.setState({hasError: true, errorResponse: apiPayload.response || {}});
      });


    }

    render() {

      if (!this.props.children) return null;

      if (this.state.hasError === true) {
        if (this.props.onError) {
          return this.props.onError(this.state.errorResponse);
        } else {
          return (
            <GenericError errorResponse={this.state.errorResponse}/>
          )
        }
      }

      if (this.state.isLoaded === false) {
        return <Spinner/>
      }

      return this.props.children(this.state.data, this.state.dataModified, this.getUtils());
    }
  }

  SwaggerData.propTypes = {
    children: PropTypes.func,
  };

  return compose(
    connect(),
    swaggerLoaderDecoratorCreator(Spinner, GenericError)
  )(SwaggerData);
};

export default SwaggerDataCreator;