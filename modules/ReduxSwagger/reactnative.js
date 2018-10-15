import {Mod} from "chillifront";
import {setApiKey, setBaseURL, setSwaggerEndpoint} from "./lib/ReduxFormSwagger/reactnative";
import reducer from "./reducer";

export default class ReduxSwagger extends Mod {

  name() {
    console.log("THIS SHOULD WORLD");
    return "ReduxSwagger"
  }

  options() {
    return {
      apiBase: "",
      apiKey: "",
      swaggerPath: "/swagger/docs/v1"
    };
  }
/*
  init2() {
    const {apiBase, apiKey, swaggerPath} = this.getOptions();
    setSwaggerEndpoint(`${apiBase}${swaggerPath}?flatten=true`);
    setApiKey(apiKey);
    setBaseURL(apiBase);
  }
*/
  reducers() {
    return {swagger: reducer}
  }


}