import React from 'react'

const mockLoaderDecoratorCreator = () => {

  return Child => {

    return class extends React.Component {
      render() {
        return <Child {...this.props}/>
      }
    }
  };

};

export default mockLoaderDecoratorCreator;