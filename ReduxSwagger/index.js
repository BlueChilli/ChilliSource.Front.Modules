import {Mod} from "chillifront";
import {setApiKey, setBaseURL, setSwaggerEndpoint} from "./lib/ReduxFormSwagger";
import SwaggerView from "./SwaggerView/SwaggerView";

export default class ReduxSwagger extends Mod {

  name() {
    return "ReduxSwagger"
  }

  options() {
    return {
      apiBase: "",
      apiKey: "",
      swaggerPath: "/swagger/docs/v1"
    };
  }

  init() {
    const {apiBase, apiKey, swaggerPath} = this.getOptions();
    setSwaggerEndpoint(`${apiBase}${swaggerPath}?flatten=true`);
    setApiKey(apiKey);
    setBaseURL(apiBase);
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