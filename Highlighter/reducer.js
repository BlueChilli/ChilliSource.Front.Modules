import {createReducer} from "redux-immutablejs";
import {Map} from "immutable";

const initialState = Map();

export default createReducer(initialState, {
  HIGHLIGHT_PENDING: (state, {meta}) => {
    return state.setIn([meta.group, meta.id], true);
  },

  HIGHLIGHT_FULFILLED: (state, {meta}) => {
    return state.deleteIn([meta.group, meta.id]);
  }


});
