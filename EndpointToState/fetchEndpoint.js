import localStorage from "localforage";
import {fromJS} from "immutable";

export default async ({endpoint, cacheLife = 300, id}) => {
	const cacheKey = "_ets_" + id;
	const cacheKeyTimeSaved = "_ets_timesaved_" + id;

	const unixTimeNow = Math.round(new Date().getTime() / 1000);
	const unixLastTimeSaved = await localStorage.getItem(cacheKeyTimeSaved);

	// Caching is here.
	if (unixTimeNow - unixLastTimeSaved < cacheLife) {
		const stuff = await localStorage.getItem(cacheKey);
		return Promise.resolve(stuff);
	}

	return fetch(endpoint).then(response => {
		const json = response.json();
		localStorage.setItem(cacheKey, json);
		localStorage.setItem(cacheKeyTimeSaved, unixTimeNow);
		return json;
	});
}