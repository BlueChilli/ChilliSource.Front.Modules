import React from 'react'

import "./summary.css";
import {BodyParamItem, FormParamItem, PathParamItem} from "./SwaggerRowTableItems";
import {
  getBodyParamsFromOperation, getFormDataParamsFromOperation, getPathParamsFromOperation,
  getQueryParamsFromOperation
} from "../lib/ReduxFormSwagger/data/swaggerReaderUtils";
import {getSummaryFromSchemaItem} from "../lib/ReduxFormSwagger/data/getSummaryFromSchemaItem";

const Operation = (props) => {

  const {data, openHandler, isOpen, data: {id, method, operationId, path, summary}} = props;
  //console.log(id, data);
  const bodyParams = getBodyParamsFromOperation(data);
  const pathParams = getPathParamsFromOperation(data);
  const queryParams = getQueryParamsFromOperation(data);
  const formDataParams = getFormDataParamsFromOperation(data);


  const methodClass = `label ${method.toLowerCase()}`;

  const classes = isOpen ? "swaggerInfo open" : "swaggerInfo";

  if (isOpen) {
    console.log("OPENED", data);
  }

  return (
    <div className={classes}>
      <div className="heading-wrapper" onClick={openHandler}>
        <div className="heading-left">
          <span className={methodClass}>{method}</span>{path}
        </div>
        <div className="heading-right">
          <Labels b={bodyParams} p={pathParams} q={queryParams} f={formDataParams}/>
        </div>
      </div>


      {isOpen &&

      <div className="content">
        {summary &&
        <div className="summary">{summary}</div>
        }

        <div className="desc"><strong>id:</strong> {id}</div>
        <div className="desc"><strong>OperationId:</strong> {operationId}</div>

        {bodyParams &&
        <div>
          <h3 className="table-heading">Body Parameters </h3>
          <table className="swagger-table">
            <tbody>
            <tr>
              <th/>
              <th>name</th>
              <th>type</th>
              <th>title</th>
              <th>features</th>
              <th>FieldType</th>
            </tr>
            {Object.entries(bodyParams).map(data => {
              const summary = getSummaryFromSchemaItem(data[1]);
              return (
                <BodyParamItem key={data[0]} name={data[0]} data={summary}/>
              )
            })}
            </tbody>
          </table>
        </div>
        }

        {pathParams &&

        <div>
          <h3 className="table-heading">Path Parameters </h3>
          <table className="swagger-table">
            <tbody>
            <tr>
              <th/>
              <th>name</th>
              <th>format</th>
              <th>type</th>
            </tr>
            {pathParams.map(data => {
              return <PathParamItem key={data.name} data={data}/>
            })}
            </tbody>
          </table>
        </div>

        }

        {queryParams &&

        <div>
          <h3 className="table-heading">Query String Parameters </h3>
          <table className="swagger-table">
            <tbody>
            <tr>
              <th/>
              <th>name</th>
              <th>format</th>
              <th>type</th>
            </tr>
            {queryParams.map(data => <PathParamItem key={data.name} data={data}/>)}
            </tbody>
          </table>
        </div>

        }

        {formDataParams &&

        <div>
          <h3 className="table-heading">Form Data Parameters </h3>
          <table className="swagger-table">
            <tbody>
            <tr>
              <th/>
              <th>name</th>
              <th>type</th>
              <th>title</th>
              <th>features</th>
              <th>FieldType</th>
            </tr>
            {Object.entries(formDataParams).map(data => {
              const summary = getSummaryFromSchemaItem(data[1]);
              return (
                <FormParamItem key={data[0]} name={data[0]} data={summary}/>
              )
            })}
            </tbody>
          </table>
        </div>

        }

      </div>
      }
    </div>
  )
};

const Labels = ({b, p, q, f}) => {
  return (
    <div className="summary-labels">
      {b && <span className="b">Body</span>}
      {p && <span className="p">Path</span>}
      {q && <span className="q">QueryString</span>}
      {f && <span className="f">Form Data</span>}
    </div>
  );

};


export default Operation;