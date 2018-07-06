import {Mod} from 'chillifront';
import promiseMiddleware from 'redux-promise-middleware';

export default class ReduxPromiseMiddleware extends Mod {
  name() {
    return 'Redux Promise Middleware';
  }

  middleware() {
    return promiseMiddleware();
  }
}