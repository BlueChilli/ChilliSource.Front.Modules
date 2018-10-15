import {Mod} from 'chillifront';
import {reducer as form} from 'redux-form';

export default class ReduxForm extends Mod {
  name() {
    return "Redux Form";
  }

  reducers() {
    return {form};
  }
}