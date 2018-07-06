import {Mod} from 'chillifront';
import reducer from "./reducer";

export default class Modal extends Mod {

  name() {
    return "Modal"
  }

  reducers() {
    return {
      modal: reducer
    }
  }

}
