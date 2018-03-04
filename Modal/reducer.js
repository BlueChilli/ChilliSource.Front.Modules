import {createReducer} from 'redux-immutablejs';

import {Map} from 'immutable';

const initialState = new Map();

export default createReducer(initialState, {
  '@@bcmodal/SHOW_MODAL': (state, action) => state.set(action.id, Map({
    id: action.id, isOpen: true, meta: action.meta
  })),

  '@@bcmodal/HIDE_MODAL': (state, action) => state.setIn([action.id, "isOpen"], false)
});
