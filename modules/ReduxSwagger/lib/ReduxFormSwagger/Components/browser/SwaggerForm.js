import React from 'react'
import {reduxForm, SubmissionError} from "redux-form";
import {compose} from 'redux';
import {connect} from "react-redux";
import get from "lodash/get";

import {
  getSummaryArrayByOperationId,
} from "../../data/swaggerReaderUtils";

import {apiCreator} from "../../data/apiCreators";
import swaggerLoaderDecorator from "./swaggerLoaderDecorator";

// Is is probably really bad, but if you find me a working alternative, then awesome.
let isMounted = false;

class SwaggerForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {summary: []};
  }

  componentDidMount() {
    isMounted = true;
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
  },
  beforeSubmit: payload => payload
};


function mapStateToProps(state, props) {
  return {
    form: props.id,
    onSubmit: (payload, dispatch, formProps) => {
      const newPayload = props.beforeSubmit(payload);
      return apiCreator(props.id, {body: newPayload}).then(apiPayload => {

        if (isMounted === false) return;

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
  swaggerLoaderDecorator,
  connect(mapStateToProps),
  reduxForm({form: 'helloworld', enableReinitialize: true}),
)(SwaggerForm); //