import createAjaxInstance from './AjaxSettings';
import { Map, fromJS } from 'immutable';
import localStorage from 'localStorage';


const insertPathArguments = (pathArgs, path, index) => {
  const pathArgsKeys = pathArgs.keySeq();
  if (pathArgsKeys.get(index) !== undefined) {
    return insertPathArguments(pathArgs, path.replace(`{${pathArgsKeys.get(index)}}`, pathArgs.get(pathArgsKeys.get(index))), index + 1);
  }
  return path;
};


const loadSwagger = ({ apiBaseURL, apiKey, cacheLife = 300 }) => {
  const mapPaths = paths => paths.mapEntries((entries) => {
    const methods = entries[1];
    const path = entries[0];
    return [path.replace('/api/v1/', ''), methods.mapEntries((entries) => {
      const method = entries[0];
      const info = entries[1];
      return [
        info.get('operationId'),
        info.set('api', (data, params = {}, pathArgs = Map({})) => {
          const pathWithArgs = insertPathArguments(Map(pathArgs), path, 0);
          return ajax.request({
            withCredentials: true,
            method,
            url: apiBaseURL + pathWithArgs,
            data,
            params,
          });
        }),
      ];
    })];
  }).flatten(1).groupBy(value => value.getIn(['tags', 0]));


  const unixTimeNow = Math.round(new Date().getTime() / 1000);
  const unixLastTimeSaved = localStorage.getItem('_frecloaplts') || 0;

  // Caching is here.
  if (unixTimeNow - unixLastTimeSaved < cacheLife) {
    const stuff = localStorage.getItem('_frecloapl');
    const paths = fromJS(JSON.parse(stuff));
    return Promise.resolve(mapPaths(paths));
  }


  const ajax = createAjaxInstance({ apiBaseURL, apiKey });

  return ajax.get(`${apiBaseURL}/swagger/docs/v1?flatten=true`).then((res) => {
    const paths = res.data.get('paths');

    localStorage.setItem('_frecloapl', JSON.stringify(paths.toJS()));
    localStorage.setItem('_frecloaplts', unixTimeNow);

    return mapPaths(paths);
  });
};


export default loadSwagger;
