import {Mod} from 'chillifront';
import AppWrapper from './AppWrapper';

export default class Mixpanel extends Mod {

  name() {
    return "Mixpanel"
  }

  options() {
    return {token: ""};
  }

  wrapApp() {
    return AppWrapper({
      token: this.getOption("token")
    });
  }
}
