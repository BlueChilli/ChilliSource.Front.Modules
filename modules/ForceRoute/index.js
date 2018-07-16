import {Mod} from "chillifront";
import ForceRouteComponent from "./ForceRouteComponent";

export default class ForceRoute extends Mod {
  name() {
    return "Force Route";
  }

  wrapApp() {
    return ForceRouteComponent(this.getOption("route"));
  }

  options() {
    return {
      route: "/",
    };
  }
}
