import {createReducer} from 'redux-create-reducer';

const initialState = {};



export default createReducer(initialState, {
  '@@bcnotify/SHOW_NOTIFICATION'(state, {time, id, meta}) {

     return {
      ...state,
      ...{[id]: {isOpen: true, time, meta}}
    }
  },
  '@@bcnotify/CLEAR_NOTIFICATION'(state, {id}) {
    return {
      ...state,
      ...{[id]: {isOpen: false}}
    }
  }
});
