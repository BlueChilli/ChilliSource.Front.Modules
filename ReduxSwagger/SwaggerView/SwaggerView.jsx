import React from 'react'
import {compose} from "redux";
import "./summary.css";
import Operation from "./Operation";
import {swaggerLoader} from "../lib/ReduxFormSwagger/index";
import {getAllOperations} from "../lib/ReduxFormSwagger/data/swaggerReaderUtils";
import {getAlreadyLoadedSwaggerData} from "../lib/ReduxFormSwagger/data/loadSwaggerDataPromise";
import {getAllConfig} from "../lib/ReduxFormSwagger/configuration";

class SummaryView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      operations: [],
      openID: "",
      swaggerConfig: []
    };
  }

  componentWillMount() {

    const swaggerData = getAlreadyLoadedSwaggerData();
    const operations = getAllOperations(swaggerData);
    const swaggerConfig = getAllConfig();
    console.log("sc", swaggerConfig);
    this.setState({operations, swaggerConfig});
  }


  render() {
    let lastNameSpace = "";
    const {apiKey, baseURL, swaggerEndPoint} = this.state.swaggerConfig;
    return (
      <div>

        <div className="view-swagger-config">
          <div className="swagger-view-container">
            <h1>Swagger View</h1>
            <strong>apiKey</strong>: {apiKey} <br/>
            <strong>baseURL</strong>: {baseURL} <br/>
            <strong>swaggerEndPoint</strong>: {swaggerEndPoint} <br/>
          </div>

        </div>
        <div className="swagger-view-container">
          {this.state.operations.map(data => {
              const ret = (
                <div key={data.id}>
                  {lastNameSpace === data.nameSpace ? <span/> : <h2 className="swaggerHeader">{data.nameSpace}</h2>}
                  <Operation isOpen={data.id === this.state.openID}
                             key={data.id}
                             data={data}
                             openHandler={() => {
                               this.setState({openID: data.id})
                             }}
                             dispatch={this.props.dispatch}
                  />


                </div>
              );
              lastNameSpace = data.nameSpace;
              return ret;
            }
          )}
        </div>
      </div>
    )
  }
}


export default compose(
  swaggerLoader,
)(SummaryView);



