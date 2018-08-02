import getAxiosInstance from "./getAxiosInstance";
//const source = CancelToken.source();
import {getDataExpectations} from "./swaggerReaderUtils";
import queryString from "query-string";
import findReplaceString from "../helpers/findReplaceString";
import {loadSwaggerDataPromise} from "./loadSwaggerDataPromise";

export const apiCreator = (id, params = {}) => {



  /*
  console.log("getAxiosInstanceOnSubmit", {
    method: endpoint.method,
    url: endpoint.url,
    data: payload.body
  });
*/

  const endpoint = getDataExpectations(id);

  params = mutateParamsFromSwaggerID(id, params);

  return loadSwaggerDataPromise().then(_ => {



      // ammend query string
      if (params.queryString) {
        endpoint.url = endpoint.url + "?" + queryString.stringify(params.queryString);
      }

      // replace the curly brackets in the URL
      if (params.path) {
        endpoint.url = Object.entries(params.path).reduce((currentUrl, pathItem) => {
            return findReplaceString(currentUrl, pathItem[0], pathItem[1]);
          }, endpoint.url
        );
      }


      return getAxiosInstance()({
        method: params.method || endpoint.method,
        url: params.url || endpoint.url,
        data: params.body
      }).then(data => {
        return data.data;
      });
    }
  );
};

const mutateParamsFromSwaggerID = (id, params) => {

  if (!params.data) return params;
  const de = getDataExpectations(id);
  const {hasPath, hasQuery, method} = de;
  if (method === "GET") {
    if (hasQuery === true && hasPath === false) {
      params["queryString"] = params.data;
    } else {
      params["path"] = params.data;
    }
  }

  return params;


};

export const apiGet = (id, path = undefined, queryString = undefined) => {
  return apiCreator(id, {path, queryString});
};

export const apiGetWithQueryString = (id, queryString = undefined) => {
  return apiCreator(id, {queryString});
};

export const apiGetWithPath = (id, path = undefined) => {
  return apiCreator(id, {path});
};

export const apiPost = (id, body) => {
  return apiCreator(id, {body});
};

export const apiPatch = (id, body) => {
  return apiCreator(id, {body});
};

