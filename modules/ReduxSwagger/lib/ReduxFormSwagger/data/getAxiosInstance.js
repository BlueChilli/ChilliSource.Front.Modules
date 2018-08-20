/** Libraries */
import axios from 'axios';

/** Helpers */
import { getApiKey, getBaseURL } from '../configuration';

const axiosInstance = axios.create({
	baseURL: getBaseURL(),
	withCredentials: true,
	headers: {
		apiKey: getApiKey(),
	},
});

axiosInstance.interceptors.response.use(
	response => Promise.resolve(response),
	error => Promise.reject(error.response)
);

export default axiosInstance;
