import {Mod} from 'chillifront';

export default class ExampleMiddlewareActionToConsole extends Mod {

  name() {
    return "Example - MiddlewareActionToConsole";
  }

  middleware() {
    return store => next => (action) => {
      console.log('[ACTION] ', action, store.getState().toJS());
      next(action);
    };
  }
}
