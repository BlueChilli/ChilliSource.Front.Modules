import React from 'react'
import {SwaggerData} from "../../modules/ReduxSwagger/lib/ReduxFormSwagger/index";


const mockData = {
  "name": "George McReact",
  "age": 99
};


export default class SwaggerDataTest extends React.Component {
  render() {
    return (
      <SwaggerData mockData={mockData} delay={500}>
        {context => {
          return (
            <div>
              <p>name: {context.name}</p>
              <p>age: {context.age}</p>
            </div>
          )
        }}
      </SwaggerData>
    )
  }
}