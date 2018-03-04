import React from 'react';
import sad from './sad.png';

require('./styles.css');

export default class View extends React.Component {
  render() {
    return (
      <div className="four-oh-four">
        <h1>4<img src={sad} alt="0" />4</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

