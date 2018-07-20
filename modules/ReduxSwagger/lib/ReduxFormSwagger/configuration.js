let swaggerEndPoint = "";
let baseUrl = undefined;
let apiKey = "";
let mockMode = false;

// We want to be able to set it dynamically, but we also
// want to maybe deal with environment variables as well.
export const setApiKey = key => {
  apiKey = key;
};

export const getApiKey = () => {
  return apiKey;
};

export const setBaseURL = url => {
  baseUrl = url;
};

export const setMockMode = mode => {
  mockMode = mode;
};

export const getBaseURL = () => {
  if (baseUrl === undefined && getMockMode() === false) {
    throw new Error("baseURL is not defined. Please check your environment variables!");
  }
  return baseUrl;
};

export const getMockMode = () => {
  return mockMode;
};

export const getSwaggerEndPoint = () => {
  const baseUrl = getBaseURL();

  return baseUrl.length !== 0 ? `${baseUrl}/swagger/docs/v1?flatten=true` : swaggerEndPoint;
};

// convenience way to override swagger endpoint
export const setSwaggerEndpoint = ep => {
  swaggerEndPoint = ep;
};

// conveniences way to get everything
export const getAllConfig = () => {
  return {
    apiKey: getApiKey(),
    baseURL: getBaseURL(),
    swaggerEndPoint: getSwaggerEndPoint()
  }
};