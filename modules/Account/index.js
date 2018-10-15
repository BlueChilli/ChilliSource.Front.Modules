/** Libraries */
import { Mod } from 'chillifront';

/** Module Account */
class Account extends Mod {
	name() {
		return 'Account';
	}

	reducers() {
		const initialState = {
			userKey: undefined,
			firstName: undefined,
			lastName: undefined,
			fullName: undefined,
			email: undefined,
			status: undefined,
			roles: [],
			profilePhotoPath: undefined,
			impersonator: undefined,
			isFirstTimeLogin: undefined,
		};

		const reducer = (state = initialState, action) => {
			switch (action.type) {
				case 'USER_LOGGED_IN': {
					return { ...state, ...action.payload };
				}

				case 'USER_LOGGED_OUT': {
					return initialState;
				}

				case 'UPDATE_EMAIL': {
					return { ...state, email: action.payload };
				}

				case 'UPDATE_PROFILE_DETAILS': {
					return { ...state, ...action.payload };
				}

				default:
					return state;
			}
		};

		return {
			Account: reducer,
		};
	}
}

export default Account;
