import {createReducer} from 'redux-immutablejs';
import {List} from 'immutable';

export default createReducer(List(), {
  ADDTHING_FULFILLED: (state, data) => {
    return state.push(data.payload);
  },

  EDITTHING_FULFILLED: (state, {payload}) => {
    return state.set(payload.get("id"), payload);
  }
});
