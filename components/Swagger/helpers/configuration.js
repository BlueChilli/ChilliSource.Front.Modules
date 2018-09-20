/**
 * We want to be able to set it dynamically, but
 * we also want to maybe deal with environment
 * variables as well
 */

export const getApiKey = () => {
	if (process.env.REACT_APP_API_KEY) {
		return process.env.REACT_APP_API_KEY;
	}

	if (!baseUrl) {
		console.error(
			'API key is not defined. Please check your .env-cmdrc file for REACT_APP_API_KEY'
		);
	}
	return undefined;
};

export const getBaseURL = () => {
	if (process.env.REACT_APP_BASE_URL) {
		return process.env.REACT_APP_BASE_URL;
	}

	if (!baseUrl) {
		console.error(
			'Base URL for API requests is not defined. Please check your .env-cmdrc file for REACT_APP_BASE_URL'
		);
	}

	return undefined;
};

export const getSwaggerEndPoint = () => {
	const baseUrl = getBaseURL();

	return baseUrl.length !== 0 ? `${baseUrl}/swagger/docs/v1?flatten=true` : '';
};

// conveniences way to get everything
export const getAllConfig = () => ({
	apiKey: getApiKey(),
	baseURL: getBaseURL(),
	swaggerEndPoint: getSwaggerEndPoint(),
});
