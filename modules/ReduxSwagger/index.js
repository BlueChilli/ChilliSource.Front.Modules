import {Mod} from "chillifront";
import {setApiKey, setBaseURL, setSwaggerEndpoint} from "./lib/ReduxFormSwagger";
import SwaggerView from "./SwaggerView/SwaggerView";
import reducer from "./reducer";
import {setMockMode} from "./lib/ReduxFormSwagger/configuration";

export default class ReduxSwagger2 extends Mod {

  name() {
    return "ReduxSwagger"
  }

  options() {
    return {
      apiBase: "",
      apiKey: "",
      swaggerPath: "/swagger/docs/v1",
      mockMode: false
    };
  }

  init() {
    const {apiBase, apiKey, swaggerPath, mockMode} = this.getOptions();

    setMockMode(mockMode);
    setSwaggerEndpoint(`${apiBase}${swaggerPath}?flatten=true`);
    setApiKey(apiKey);
    setBaseURL(apiBase);
  }

  reducers() {
    return {swagger: reducer}
  }

  routes() {
    return [
      {
        exact: true,
        path: "/bcswagger/",
        component: SwaggerView
      }
    ]
  }


}