import React from 'react';

require('./styles.css');

export default class View extends React.Component {
  render() {
    return (
      <div className="four-oh-four">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

