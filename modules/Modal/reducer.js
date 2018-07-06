import {createReducer} from 'redux-create-reducer';

const initialState = {};

const modalReducer = createReducer(initialState, {
  '@@bcmodal/SHOW_MODAL'(state, {payload: {id, meta}}) {
    return {
      ...state,
      ...{[id]: {isOpen: true, meta}}
    }
  },
  '@@bcmodal/HIDE_MODAL'(state, {payload: {id, meta}}) {
    return {
      ...state,
      ...{[id]: {isOpen: false, meta}}
    }
  }
});

export default modalReducer;