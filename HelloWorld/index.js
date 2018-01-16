import {Mod, enhancer} from "chillifront";
import * as allActions from './actions';
import reducer from "./reducer";
import Here from "./Component";

export {default as Component} from './Component';

export default class HelloWorld extends Mod {

  name() {
    return "HelloWorld"
  }

  actions() {
    return allActions;
  }

  reducers() {
    return {HelloWorld: reducer};
  }

  routes() {
    return [
      {
        path: "/helloworld",
        component: enhancer(Here)
      }
    ]
  }

}