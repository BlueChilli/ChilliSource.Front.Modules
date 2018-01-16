import React, {Component} from "react";
import {connect} from "react-redux";
import {pressButton} from "./actions";

class Foo extends Component {
  render() {
    const txt = this.props.isPressed ? "I AM PRESSED" : "Press Me!";
    return <button onClick={this.props.pressButton}>
      {txt}
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
    isPressed: state.getIn(['ExamplePressMe', 'isPressed'])
  }
};

export default connect(mapState, mapDispatch)(Foo);