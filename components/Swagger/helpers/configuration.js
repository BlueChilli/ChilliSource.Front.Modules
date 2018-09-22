/**
 * We want to be able to set it dynamically, but
 * we also want to maybe deal with environment
 * variables as well
 */

export const getApiKey = () => {
	if (process.env.STORYBOOK_API_KEY) {
		return process.env.STORYBOOK_API_KEY;
	}

	if (process.env.REACT_APP_API_KEY) {
		return process.env.REACT_APP_API_KEY;
	}

	console.error('API key is not defined. Please check your .env-cmdrc file for REACT_APP_API_KEY');
	return undefined;
};

export const getBaseURL = () => {
	if (process.env.STORYBOOK_BASE_URL) {
		return process.env.STORYBOOK_BASE_URL;
	}

	if (process.env.REACT_APP_BASE_URL) {
		return process.env.REACT_APP_BASE_URL;
	}

	console.error(
		'Base URL for API requests is not defined. Please check your .env-cmdrc file for REACT_APP_BASE_URL'
	);
	return undefined;
};

export const getApiURL = () => {
	if (process.env.STORYBOOK_API_URL) {
		return process.env.STORYBOOK_API_URL;
	}

	if (process.env.STORYBOOK_BASE_URL) {
		return `${process.env.STORYBOOK_BASE_URL}/api/v1/`;
	}

	if (process.env.REACT_APP_BASE_API_URL) {
		return process.env.REACT_APP_BASE_API_URL;
	}

	if (process.env.REACT_APP_API_EXTENSION && process.env.REACT_APP_BASE_URL) {
		return `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_EXTENSION}`;
	}

	console.error(
		'URL for API requests is not defined. Please check your .env-cmdrc file & ensure REACT_APP_BASE_URL & REACT_APP_API_EXTENSION or REACT_APP_API_URL'
	);
	return undefined;
};

export const getSwaggerEndPoint = () => `${getBaseURL()}swagger/docs/v1?flatten=true`;

// conveniences way to get everything
export const getAllConfig = () => ({
	apiKey: getApiKey(),
	baseURL: getBaseURL(),
	apiURL: getApiURL(),
	swaggerEndPoint: getSwaggerEndPoint(),
});
