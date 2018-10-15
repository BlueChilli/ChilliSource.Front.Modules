import { Mod } from "chillifront";
import AppWrapper from "./AppWrapper.jsx";

export default class ScriptLoader extends Mod {
  name() {
    return "Script Loader";
  }

  wrapApp() {
    return AppWrapper({ scripts: this.getOption("scripts") });
  }

  options() {
    return {
      scripts: []
    };
  }
}
