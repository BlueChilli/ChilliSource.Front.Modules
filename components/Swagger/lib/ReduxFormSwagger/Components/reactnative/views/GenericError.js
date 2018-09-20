import React from 'react'
import {Text} from 'react-native';

export default class GenericError extends React.Component {

  render() {
    return (

      <Text>
        Error:
        {this.props.errorResponse.status} ({this.props.errorResponse.statusText}
      </Text>


    )
  }
}