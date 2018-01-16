import {Mod} from 'chillifront';
import throttle from 'lodash/throttle';
import {fromJS} from 'immutable';

export default class PersistState extends Mod {

  name() {
    return "Persist State";
  }

  storeSubscribe() {
    return store => throttle(() => {
      const state = store.getState();
      sessionStorage.setItem('reduxPersist', JSON.stringify(state.toJS()));
    }, 1000);
  }

  storeEnhancer() {
    return next => (reducer, initialState) => {
      const storage = sessionStorage.getItem('reduxPersist');
      const currentState = (storage !== null) ? fromJS(JSON.parse(storage)) : initialState;
      return next(reducer, currentState);
    };
  }
}
