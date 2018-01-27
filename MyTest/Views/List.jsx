import React from 'react'
import {connect} from 'react-redux';
import {Col, Container, Row} from "react-bs4grid";
import {NavLink} from 'react-router-dom';
import testSelector from "../Data/MyTest";

const ListItem = ({name, random, bacon, editHandler}) => {
  return (
    <div className="list-item" onClick={editHandler}>
      <h3>{name}</h3>
      <strong>{random}</strong>
      <p>{bacon}</p>
    </div>
  )
};

class List extends React.Component {
  render() {
    return (
      <Container className="mytest">
        <Row>
          <Col>
            <div className="btn-container">
              <NavLink to="/mytest/add" className="btn">Add Something</NavLink>
            </div>
          </Col>
        </Row>
        <Row>
          {this.props.list.map((thing, key) => {
            return (
              <Col key={key} sm={6} md={4} lg={3} className="list-container">
                <ListItem name={thing.get("name")}
                          random={thing.get("random")}
                          bacon={thing.get("bacon")}
                          editHandler={() => {
                            this.props.history.push("/mytest/edit/" + key)
                          }}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
    list: testSelector(state)
  }
};

export default connect(mapStateToProps)(List);