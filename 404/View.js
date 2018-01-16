import React from 'react';
import sad from './sad.png';

require('./styles.css');

export default class View extends React.Component {
  render() {
    return (
      <div className="four-oh-four">
        <h1>4<img src={sad} alt="0" />4</h1>
        <p>Not Found, Missing, or just plain Gone.</p>
      </div>
    );
  }
}

