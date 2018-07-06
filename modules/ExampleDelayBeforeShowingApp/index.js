import {Mod} from 'chillifront';
import SDBComponent from './SDBComponent';

export default class EnhancerDelayBeforeShowing extends Mod {

  name() {
    return "EnhancerDelayBeforeShowing"
  }

  options() {
    return {delay: 1000};
  }

  wrapApp() {
    return SDBComponent(this.getOption("delay"));
  }
}
