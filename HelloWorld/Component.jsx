import React, {Component} from "react";
import {connect} from "react-redux";
import {pressButton} from "./actions";
import "./styles.css";
class Foo extends Component {
  render() {
    return <button onClick={this.props.pressButton} className="hello-world">
      {this.props.isPressed ? "Hello" : "World"}
    </button>
  }
}

const mapDispatch = (dispatch) => {
  return {
    pressButton: () => dispatch(pressButton())
  }
};

const mapState = (state) => {
  return {
    isPressed: state.getIn(['HelloWorld', 'isPressed'])
  }
};

export default connect(mapState, mapDispatch)(Foo);