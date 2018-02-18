import {Mod} from 'chillifront';
import reducer from "./reducer";
export default class Highlighter extends Mod {

  name() {
    return "Highlighter"
  }

  reducers(){
    return {
      highlight: reducer
    }
  }


}
