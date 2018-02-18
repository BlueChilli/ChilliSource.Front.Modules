import {createReducer} from 'redux-immutablejs';
import {fromJS} from 'immutable';
import {Map, toJS} from 'immutable';

const initialState = new Map();

export default createReducer(initialState, {
  '@@bcnotify/SHOW_NOTIFICATION': (state, action) => state.set(action.id, Map({
    id: action.id,
    text: action.text,
    level: action.level,
  })),

  '@@bcnotify/CLEAR_NOTIFICATION': (state, action) => state.delete(action.id),
});
