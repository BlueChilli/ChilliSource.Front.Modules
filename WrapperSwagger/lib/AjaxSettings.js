import axios from 'axios';
import { fromJS } from 'immutable';

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
);

const createInstance = ({ apiKey }) => {
  const instance = axios.create({
    withCredentials: true,
    headers: {
      apiKey,
    },
    transformResponse: (data) => {
      const parsedData = JSON.parse(data);
      return fromJS(parsedData);
    },

  });

  instance.interceptors.request.use((config) => {
    if (!canUseDOM) {
      throw new Error("You can't use ajax on the server");
    }
    return config;
  });

  instance.interceptors.response.use(
    response =>
    // Do something with response data
      response
    , error =>
    // Do something with response error
    // error.data = error.data.set('status', error.status);
      Promise.reject(error),
  );

  return instance;
};


/*
export const request = (UserKey) => axios.create({
    withCredentials: true,
    baseURL: BASE_URL + API_URL,
    headers: {
        apiKey: API_KEY,
        UserKey
    },
    transformResponse: (data) => {
        const parsedData = JSON.parse(data);
        return fromJS(parsedData);
    }
});
*/

export default createInstance;
