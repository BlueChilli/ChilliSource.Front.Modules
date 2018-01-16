import React from 'react';
import { connect } from 'react-redux';
import { testAction } from './actions';

class TestComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    console.log('WOO', this.props);
  }

  clickHandler(e) {
    this.props.dispatch(testAction());
  }

  render() {
    console.log('props', this.props);
    return (
      <div><button onClick={this.clickHandler.bind(this)}>Click Me</button></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(
  mapStateToProps,
  null,
)(TestComponent);
