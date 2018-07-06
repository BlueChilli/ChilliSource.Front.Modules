import React from 'react';
import './css.css';

export default delay => WrappedComponent => class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    if (this.state.show) {
      return <WrappedComponent {...this.props} />;
    }
    return <div className="edbspinner"/>;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: true});
    }, delay);
  }
};

