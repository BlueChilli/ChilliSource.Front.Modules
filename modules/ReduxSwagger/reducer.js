import {createReducer} from 'redux-create-reducer';

const initialState = {};


export const swaggerData = createReducer(initialState, {
  '@@bcswagger/SAVESTATE/FLAT'(state, action) {
    return {
      ...state, ...{
        [action.payload.target]: action.payload
      }
    }
  }
});

export default swaggerData;