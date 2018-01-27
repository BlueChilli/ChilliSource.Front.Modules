import { Mod } from "chillifront";
import { reducer as form } from "redux-form/immutable";

export default class ReduxFormChilli extends Mod {
  name(){
    return "Redux Form Chilli";
  }

  reducers() {
    return { form };
  }
}
