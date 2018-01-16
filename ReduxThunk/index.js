import { Mod } from 'chillifrontx';
import thunk from 'redux-thunk';

export default class ReduxThunk extends Mod {
  name() {
    return 'Redux Thunk Middleware';
  }

  middleware() {
    return thunk;
  }
}
