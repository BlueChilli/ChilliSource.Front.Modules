import React from 'react'
import {reduxForm, SubmissionError} from "redux-form";
import {compose} from 'redux';
import {connect} from "react-redux";
import get from "lodash/get";

import {
  getSummaryArrayByOperationId,
} from "../data/swaggerReaderUtils";

import {apiCreator} from "../data/apiCreators";
import SwaggerLoaderDecorator from "../data/swaggerLoaderDecorator";


class SwaggerForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {summary: []};
  }

  componentWillMount() {
    this.setState({summary: getSummaryArrayByOperationId(this.props.id)});
  }

  render() {
    if (typeof this.props.children === "function") {
      return (
        <form onSubmit={this.props.handleSubmit}>
          {this.props.children(this.props)}
        </form>
      )
    } else {
      return (
        <form onSubmit={this.props.handleSubmit}>
          {this.props.children}
        </form>
      )
    }
  }
}

SwaggerForm.defaultProps = {
  onSuccess: () => {
  },
  onFail: () => {
  }
};


function mapStateToProps(state, props) {

  return {
    form: props.id,
    onSubmit: (payload, dispatch, formProps) => {

      return apiCreator(props.id, {body: payload}).then(apiPayload => {

        dispatch({
          type: "@@bcswagger/APISUCCESS/"+props.id,
          payload: {
            data: apiPayload,
            id: props.id
          }
        });
        if (props.onSuccess) {
          props.onSuccess(apiPayload, dispatch, formProps);
        }
      }).catch(apiPayload => {

        const responseData = get(apiPayload, "response.data");
        const status = get(apiPayload, "response.status") || "networkerror";

        dispatch({
          type: "@@bcswagger/APIERROR",
          payload: {
            data: {data: responseData, status},
            id: props.id
          }
        });

        if (props.onFail) {
          props.onFail(apiPayload, dispatch, formProps);
        }
        throw new SubmissionError({_error: get(apiPayload, "response.data")});
      });


    }
  };
};

export default compose(
  SwaggerLoaderDecorator,
  connect(mapStateToProps),
  reduxForm({form: 'helloworld', enableReinitialize: true}),
)(SwaggerForm); //
