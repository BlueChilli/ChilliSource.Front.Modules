import View from './View';
import {Mod} from 'chillifront';

export default class NotFoundPage extends Mod {

  name() {
    return "NotFoundPage";
  }

  routes(applyEnhancers) {
    return [
      {
        component: applyEnhancers(View),
      },
    ];
  }
}
