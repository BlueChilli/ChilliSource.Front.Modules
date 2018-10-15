import { Mod } from "chillifront";
import AppWrapper from "./AppWrapper.jsx";

export default class GoogleAnalytics extends Mod {
  name() {
    return "Google Analytics";
  }

  wrapApp() {
    return AppWrapper({ trackingId: this.getOption("trackingId") });
  }

  options() {
    return {
      trackingId: "",
      debug: true,
      require: []
    };
  }
}
