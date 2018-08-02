import React from 'react'
import {loadSwaggerDataPromise} from "../data/loadSwaggerDataPromise";



const swaggerLoaderDecoratorCreator = (Spinner, ErrorComponent) => {

  return Child => {

    return class extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.state = {
          uid: "SwaggerLoaderDecorator" + Math.floor(Math.random() * 0xFFFF),
          swaggerDataExists: false,
          isError: false,
        };
      }

      componentDidMount() {
          return loadSwaggerDataPromise().then(_ => {
            this.setState({swaggerDataExists: true});
          }).catch(e => {
            this.setState({isError: true});
          });
      }

      render() {

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