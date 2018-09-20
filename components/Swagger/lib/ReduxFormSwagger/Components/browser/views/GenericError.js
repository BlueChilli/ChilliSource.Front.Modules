import React from 'react'
import get from "lodash/get";

export default class GenericError extends React.Component {

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Error while fetching data</h1>
        <p>
          {get("this.props.errorResponse", "status")}
          {get("this.props.errorResponse", "statusText")}
        </p>
      </div>
    )
  }
}