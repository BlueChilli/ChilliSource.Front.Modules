
import { Mod } from 'chillifront';
import reducer from './reducer';
import * as actions from './actions';

export default class Notificiations extends Mod {

  name() {
    return "Notifications";
  }

  actions() {
    return actions;
  }

  reducers() {
    return {
      notifications: reducer,
    };
  }
}
