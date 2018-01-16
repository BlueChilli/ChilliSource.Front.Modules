import React from 'react';
import { Col, Container, Row } from '../../../frecl/Components/React-Bootstrap-4-Grid/index';

export default class Logout extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>You have been Logged Out</h1>
            <p>Have a nice day :)</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

