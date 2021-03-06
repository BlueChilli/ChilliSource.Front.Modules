import {createReducer} from 'redux-immutablejs';
import {Map} from 'immutable';

export default createReducer(Map({isPressed: false}), {
  HW_PRESS_BUTTON: (state, payload) => {
    const isPressed = state.get('isPressed');
    return state.set('isPressed', !isPressed);
  }
});
