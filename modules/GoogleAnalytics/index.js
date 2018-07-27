import {Mod} from "chillifront";
import AppWrapper from "./AppWrapper.jsx";

export default class GoogleAnalytics extends Mod {
  name() {
    return "Google Analytics";
  }

  init2() {
    const trackingId = this.getOption("trackingId");
    if (!trackingId) {
      return;
    }

    ReactGA.initialize(trackingId, {
      debug: this.getOption("debug")
    });
    const ga = window.ga;
    ga("create", trackingId, "auto");
    // these events can change to whatever you want to track

    this.getOption("require").forEach(m => {
      ga("require", m);
    });

  }

  wrapApp() {
    return AppWrapper(
      {trackingId: this.getOption("trackingId")}
    );
  }

  options() {
    return {
      trackingId: "",
      debug: true,
      require: []
    };
  }
}
