import getAxiosInstance from "./getAxiosInstance";
import {getSwaggerEndPoint} from "../configuration";

let swaggerCachedEndPoint = "";
let swaggerData = undefined;

//const endPoint = "https://mysail-stg.azurewebsites.net:443/swagger/docs/v1";

//const endPoint = "https://benchon-dev.azurewebsites.net/swagger/docs/v1";
// F5311DE2-6F54-443E-8FC6-863AE944CE4A

//const endPoint = "http://inndox-dev.azurewebsites.net:80/swagger/docs/v1";


//const endPoint = "https://writally-stg.azurewebsites.net:443/swagger/docs/v1";

export const loadSwaggerDataPromise = () => {

  if (swaggerData !== undefined && getSwaggerEndPoint() === swaggerCachedEndPoint) {

    return new Promise((resolve, reject) => {
      resolve(swaggerData);
    });
  }

  const i = getAxiosInstance().get(getSwaggerEndPoint());
  return i.then(response => {
    swaggerData = response.data;
    swaggerCachedEndPoint = getSwaggerEndPoint();
  });

};

export const getAlreadyLoadedSwaggerData = () => {
  return swaggerData;
};

