import React from 'react';
import { connect } from 'react-redux';
import ReactShow from 'react-show';

class InlineNotification extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <ReactShow
        show={this.props.hasError}
        easing={ReactShow.easings.easeOutQuart}
      >
        <div className={this.props.className}>
          <span>{this.props.text}</span>
        </div>
      </ReactShow>
    );
  }
}


const mstp = (state, ownProps) => ({
  hasError: state.hasIn(['notifications', ownProps.id]),
  error: state.getIn(['notifications', ownProps.id]),
  text: state.getIn(['notifications', ownProps.id, 'text']),
});

export default connect(mstp)(InlineNotification);
