import { Mod } from "chillifront";
import { hotjar } from "react-hotjar";

export default class Hotjar extends Mod {
  name() {
    return "Hotjar";
  }

  init() {
    hotjar.initialize(
      this.getOption("hotjarId"),
      this.getOption("hotjarSnippetVersion")
    );
  }

  options() {
    return {
      hotjarId: "",
      hotjarSnippetVersion: true
    };
  }
}
