import {Mod} from "chillifront";
import * as allActions from './actions';
import reducer from "./reducer";
import {push} from 'react-router-redux';
import {deleteSession} from "./actions";

export default class ReduxSwaggerAccount extends Mod {

  name() {
    return "ReduxSwaggerAccount"
  }

  actions() {
    return allActions;
  }

  reducers() {
    return {account: reducer};
  }

  middleware() {
    return store => next => (action) => {
      if (action.type === "@@bcswagger/APIERROR"
      ) {
        const {data: {status}} = action.payload;
        if (status === 401) {
          store.dispatch(deleteSession());
          store.dispatch(push("/account/signout"));
        }
      }
      next(action);
    };
  }

  storeEnhancer() {
    return next => (reducer, initialState) => {
      const enhanceReducer = (state, action) => {
        if (action.type === "ACCOUNT/deletesession") {
          state = undefined;
        }
        return reducer(state, action)
      };
      return next(enhanceReducer, initialState);
    };
  }


}