
import { Mod } from 'chillifront';
import reducer from './reducer';
import * as actions from './actions';

export default class Notificiation extends Mod {

  name() {
    return "Notification";
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
