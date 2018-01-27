import React from 'react'
import {Col, Container, Row} from "react-bs4grid";
import {SubmissionError} from "redux-form/immutable";
import {addThing} from "../actions";
import FormStuff from "./FormStuff";

const submitHandler = (payload, dispatch, props) => {
  return dispatch(addThing(payload)).then(() => {
    props.reset();
    props.history.push("/mytest");
  }).catch(e => {
    throw new SubmissionError({_error: e.toString()})
  });
};

class Add extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h1>Add New Thing</h1>
            <FormStuff onSubmit={submitHandler} {...this.props}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Add;