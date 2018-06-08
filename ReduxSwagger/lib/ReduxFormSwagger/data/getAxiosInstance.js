import axios from 'axios';

import {getApiKey, getBaseURL} from "../configuration";

const getAxiosInstance = (options = {}) => {

  let defaults = {
    baseURL: getBaseURL(),
    withCredentials: true,
    headers: {
      apiKey: getApiKey()
    }
  };

  let axiosOptions = Object.assign({}, defaults, options);

  axios.interceptors.response.use((response) => {
    return response;
  }, function (error) {
    return Promise.reject(error.response);
  });

  return axios.create(axiosOptions);
};


export default getAxiosInstance;