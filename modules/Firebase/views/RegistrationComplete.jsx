import React from 'react';
import { Col, Container, Row } from '../../../frecl/Components/React-Bootstrap-4-Grid/index';

export default class RegistrationComplete extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Registration Complete!</h1>
            <p>You are now logged in.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
