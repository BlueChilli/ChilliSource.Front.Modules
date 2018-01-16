import React from 'react';
import { connect } from 'react-redux';
import { testAction } from './actions';

class TestComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  clickHandler(e) {
    this.props.dispatch(testAction());
  }

  render() {
    // console.log("props", this.props);
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>Click Me</button>
        <hr />
                Last Time Clicked: {this.props.lastClick}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  lastClick: state.getIn(['test', 'Date']).toString(),
});

export default connect(
  mapStateToProps,
  null,
)(TestComponent);
