import React from 'react'
import SwaggerData from "../../ReduxFormSwagger/SwaggerData";

class ContextTest extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <SwaggerData id="get/api/v1/company">
        {payload => {
          return (
            <div>
              <h2>Companies</h2>
              {payload.data.map(company => {
                return <div>{company.name}</div>
              })}
            </div>
          );
        }}
      </SwaggerData>
    )
  }
}

export default ContextTest;