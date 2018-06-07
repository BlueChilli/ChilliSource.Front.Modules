import {Mod} from "chillifront";
export {default as Component} from './Component';

export default class HelloWorld extends Mod {

  name() {
    return "Redux BC Log"
  }

}

export log from "./log";