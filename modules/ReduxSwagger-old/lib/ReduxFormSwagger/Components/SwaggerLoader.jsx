import React from 'react'
import {loadSwaggerData} from "../data/swaggerLoader.js";

class SwaggerLoader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      swaggerDataExists: false
    };
  }

  componentWillMount() {
    loadSwaggerData().then(load => {
      this.setState({swaggerDataExists: true});
    });
  }

  render() {
    if (this.state.swaggerDataExists === false) {
      return <div>please wait</div>
    } else {
      return this.props.children;
    }
  }
}


export default SwaggerLoader;