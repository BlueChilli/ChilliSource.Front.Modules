import {Mod} from "chillifront";
import AppWrapper from "./AppWrapper";
import reducer from "./reducer";


export default class EndpointToState extends Mod {

	name() {
		return "Endpoint to State";
	}

	options() {
		return {endpoint: "", fetchingText: ""};
	}

	reducers() {
		return {[this.getId()]: reducer};
	}

	wrapApp() {
		return AppWrapper(this.getOptions());
	}


}
