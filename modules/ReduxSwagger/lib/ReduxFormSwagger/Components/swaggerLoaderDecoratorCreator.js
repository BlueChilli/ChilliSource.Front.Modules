import React from 'react'
import {loadSwaggerDataPromise} from "../data/loadSwaggerDataPromise";
import {getMockMode} from "../configuration";


const swaggerLoaderDecoratorCreator = (Spinner, ErrorComponent) => {

  return Child => {

    return class extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.state = {
          uid: "SwaggerLoaderDecorator" + Math.floor(Math.random() * 0xFFFF),
          swaggerDataExists: false,
          isError: false,
          isMocked: getMockMode()
        };
      }

      componentDidMount() {
        if (this.state.isMocked === false) {
          return loadSwaggerDataPromise().then(_ => {
            this.setState({swaggerDataExists: true});
          }).catch(e => {
            this.setState({isError: true});
          });

        }
      }

      render() {

        if (this.state.isMocked) {
          return <Child {...this.props}/>
        }

        if (this.state.isError === true) {
          return <ErrorComponent/>
        }

        if (this.state.swaggerDataExists === false) {
          return <Spinner/>
        } else {
          return <Child {...this.props}/>
        }

      }
    }

  };

};

export default swaggerLoaderDecoratorCreator;