import React from 'react'
import guessFieldType from "../lib/ReduxFormSwagger/data/guessFieldType";


export const BodyParamItem = (props) => {


  const {name, data: {title, type, features}} = props;

  const fieldString = guessFieldType(props.data);
  return (
    <tr>
      <td>
        <button onClick={() => {
          console.log(`Body Params -> ${name}`, props.data);
        }}>Log
        </button>
      </td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{title}</td>
      <td>{features.join(", ")}</td>
      <td>{fieldString}</td>
    </tr>

  );

};


export const PathParamItem = ({data}) => {

  const {name, format, type} = data;

  return (
    <tr>
      <td>
        <button onClick={() => {
          console.log(`Path Params -> ${name}`, data);
        }}>Log
        </button>
      </td>
      <td>{name}</td>
      <td>{format}</td>
      <td>{type}</td>

    </tr>

  );

};


export const FormParamItem = (props) => {
  const {name, data: {title, type, features}} = props;
  const fieldString = guessFieldType(props.data);
  return (
    <tr>
      <td>
        <button onClick={() => {
          console.log(`Form Data Params -> ${name}`, props.data);
        }}>Log
        </button>
      </td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{title}</td>
      <td>{features.join(", ")}</td>
      <td>{fieldString}</td>
    </tr>

  );

};