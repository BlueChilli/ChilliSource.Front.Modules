import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
//import stateStack from "../stateStack";
import ls from 'local-storage';
//import modal from "./reducers/modal";

const swagger = (state = {url: ls.get("swaggerurl"), apikey: ls.get("swaggerapikey")}, action) => {
  switch (action.type) {
    case 'SETSWAGGERURL':
      state.url = action.payload;
      return state;
    case 'SETSWAGGERAPIKEY':
      state.apikey = action.payload;
      return state;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  form: formReducer,
  //stateStack: (state = stateStack) => state,
});


export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);