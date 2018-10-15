import React from 'react'

export default class WrapperSimple extends React.Component {
  render() {

    if (!this.props.isOpen) return null;
    return (
      <span className={this.props.className}>
        {this.props.children}
        </span>
    );
  }
}