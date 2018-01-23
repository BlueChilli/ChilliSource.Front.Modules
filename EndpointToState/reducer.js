import {createReducer} from "redux-immutablejs";
import {Map, fromJS} from "immutable";

export default createReducer(Map({payload: Map()}), {
	ETS_SAVESTATE: (state, payload) => {
		return state.set("payload", fromJS(payload.payload));
	}
});
