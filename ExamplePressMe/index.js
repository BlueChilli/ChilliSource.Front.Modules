import {Mod} from "chillifront";
import * as allActions from './actions';
import reducer from "./reducer";


export default class Test extends Mod {

  name() {
    return "ExamplePressMe"
  }

  actions() {
    return allActions;
  }

  reducers() {
    return {ExamplePressMe: reducer};
  }

}

export {default as Button} from './ExamplePressMeComponent';