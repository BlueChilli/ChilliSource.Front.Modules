import React from 'react'
import {Col, Container, Row} from "react-bs4grid";
import {SubmissionError} from "redux-form/immutable";
import {editThing} from "../actions";
import {connect} from 'react-redux';
import testSelector from "../Data/MyTest";
import FormStuff from "./FormStuff";


const submitHandler = (payload, dispatch, props) => {

  // Add Since we're updating
  payload = payload.set("id", props.id);

  return dispatch(editThing(payload)).then(() => {
    props.reset();
    props.history.push("/mytest");
  }).catch(e => {
    throw new SubmissionError({_error: e.toString()})
  });
};

class Edit extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h1>Edit Thing</h1>
            <FormStuff id={this.props.match.params.id} onSubmit={submitHandler} {...this.props}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    initialValues: testSelector(state).get(props.match.params.id)
  }
};

export default connect(mapStateToProps)(Edit);



