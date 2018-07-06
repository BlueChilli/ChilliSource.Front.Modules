import {Mod} from "chillifront";
import {addlogMWStack, getlogMWStack} from "./lib/logMWStack";

export default class ReduxBCLog extends Mod {
  name() {
    return "Redux BC Log"
  }

  init() {
    this.getOption("middleware").forEach(mw => {
      addlogMWStack(mw);
    });

  }

  options() {
    return {
      middleware: [],
      logToConsole: false
    }
  }

  middleware() {
    const logToConsole = this.getOption("logToConsole");
    return store => next => (action) => {
      if (action.type === "@@BCLog") {

        if (logToConsole) {
          console.log("LOG:", action.payload.name, action.payload.info);
        }

        // If this is a log entry, look for anything that
        // matches the log middleware, and run it if applicable.
        getlogMWStack().forEach(stackDeclaration => {
          Object.entries(stackDeclaration).forEach(decObj => {
            if (decObj[0] === action.payload.name) {
              decObj[1](action.payload.info, store);
            }
          });
        });
      }
      next(action);
    };
  }
}


// Log Action
export {default as log} from "./log";