import React from 'react'
import {loadSwaggerDataPromise} from "./loadSwaggerDataPromise";
import InlineSpinner from "../Components/InlineSpinner/InlineSpinner";

const SwaggerLoaderDecorator = Child => {

  return class extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        uid: "SwaggerLoaderDecorator" + Math.floor(Math.random() * 0xFFFF),
        swaggerDataExists: false
      };
    }

    componentDidMount() {

      return loadSwaggerDataPromise().then(_ => {
        //
        this.setState({swaggerDataExists: true});

      });
    }

    render() {
      if (this.state.swaggerDataExists === false) {
        return <InlineSpinner/>
      } else {
        return <Child {...this.props}/>
      }
    }
  }

};

export default SwaggerLoaderDecorator;