import { Mod } from "chillifront";
import ReactGA from "react-ga";

export default class GoogleAnalytics extends Mod {
  name() {
    return "Google Analytics";
  }

  init() {
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
    ga("require", "eventTracker");
    ga("require", "outboundLinkTracker");
    ga("require", "urlChangeTracker");
  }

  options() {
    return {
      trackingId: "",
      debug: true,
      autotrack: true
    };
  }
}
