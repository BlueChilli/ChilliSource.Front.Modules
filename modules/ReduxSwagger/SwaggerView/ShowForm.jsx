import React from 'react';
import SwaggerForm from "../../ReduxFormSwagger/SwaggerForm";

class ShowForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <SwaggerForm id={this.props.id} onSubmit={(stuff) => {
        //alert("look at me");
      }}/>
    );
  }
};


export default ShowForm;