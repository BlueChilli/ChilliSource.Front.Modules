/** Libraries */
import axios from 'axios';

/** Helpers */
import { getAllConfig } from './configuration';

const { apiKey, apiURL } = getAllConfig();
const axiosInstance = axios.create({
	baseURL: apiURL,
	withCredentials: true,
	headers: {
		apiKey,
	},
});

axiosInstance.interceptors.response.use(
	response => Promise.resolve(response),
	error => {
		if (error.response.status === 400) {
			// log user out here
		}
		return Promise.reject(error.response);
	}
);

export default axiosInstance;
