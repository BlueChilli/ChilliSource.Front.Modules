/** Libraries */
import { Mod } from 'chillifront';
import throttle from 'lodash/throttle';

/**
 * @class PersistState
 * @description Saves the full app state or a part thereof(as specified) in session storage
 */
class PersistState extends Mod {
	name() {
		return 'Persist State';
	}

	storeSubscribe() {
		const options = this.getOptions();

		/**
		 * If not specified, save the full state. This
		 * is to keep the existing functionality intact
		 * and provide more features on the top
		 */
		if (!options || !options.states || options.states.length === 0) {
			return store =>
				throttle(() => {
					const state = store.getState();
					sessionStorage.setItem('reduxPersist', JSON.stringify(state));
				}, 1000);
		}

		return store =>
			throttle(() => {
				const states = options.states,
					state = store.getState();

				const statesToSave = Object.keys(state)
					.filter(stateKey => states.indexOf(stateKey) >= 0)
					.reduce((reduction, stateKey) => {
						return { ...reduction, [stateKey]: state[stateKey] };
					}, {});

				sessionStorage.setItem('reduxPersist', JSON.stringify(statesToSave));
			}, 1000);
	}

	storeEnhancer() {
		return next => (reducer, initialState) => {
			const storage = sessionStorage.getItem('reduxPersist');
			const currentState = storage !== null ? JSON.parse(storage) : initialState;
			return next(reducer, currentState);
		};
	}
}

export default PersistState;
