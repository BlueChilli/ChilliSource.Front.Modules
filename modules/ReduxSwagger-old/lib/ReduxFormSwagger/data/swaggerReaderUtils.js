import get from 'lodash/get';
import {getSummaryFromSchemaItem} from "./getSummaryFromSchemaItem";
import {getAlreadyLoadedSwaggerData} from "./loadSwaggerDataPromise";


/**
 * @param data
 * @returns {Array}
 *
 * Returns an array of swagger operations. Each operation should have everything
 * you need to do all the things.
 *
 */
export const getAllOperations = data => {

  const paths = Object.entries(data.paths);
  let operations = [];

  paths.forEach(path => {

    Object.entries(path[1]).forEach(bit => {

      const operationId = bit[1].operationId;
      const nameSpace = deriveNameSpaceFromOperationId(operationId);
      const action = deriveActionFromOperationId(operationId);
      const method = bit[0].toLowerCase();
      //const id = `${nameSpace}/${action}/${method}`.toLowerCase();
      const id = `${method}${path[0]}`;


      if (nameSpace !== "NotFound") {
        operations.push({
          id,
          path: path[0],
          method: method.toUpperCase(),
          operationId,
          nameSpace,
          action,
          summary: bit[1].summary,
          data: bit[1]
        });
      }
    });
  });
  return operations;
};


/**
 * @param operationId
 * @returns {string|*}
 *
 * Simple string manip to grab the namespace from the operation Id string.
 *
 */
export const deriveNameSpaceFromOperationId = (operationId) => {
  return operationId.substr(0, operationId.indexOf('_'));
};


/**
 * @param operationId
 * @returns {string|*}
 *
 * Simple string manip to grab the action from the operation Id string.
 *
 */

export const deriveActionFromOperationId = (operationId) => {
  return operationId.substr(operationId.indexOf('_') + 1);
};

/**
 * @param operations
 * @param operationId
 * @returns {T|*}
 *
 * Returns a swagger operation object based on ID.
 */

export const getBaseURL = swaggerData => {
  const basePath = swaggerData.basePath || "";
  return swaggerData.schemes[0] + "://" + swaggerData.host + basePath;
};


/**
 * @param data
 * @param operationId
 * @returns {*}
 *
 *
 *
 */

export const getByOperationId = (data, operationId) => {
  const operations = getAllOperations(data);
  return operations.find(operation => {
    return operation.id === operationId;
  })
};

export const getBodyParamsFromOperation = operation => {
  const params = get(operation, 'data.parameters');
  if (params === undefined) return false;
  const bodyParam = params.find(foo => {
      return foo.in === "body"
    }
  );
  return (bodyParam ? get(bodyParam, "schema.properties") : false) || false;
};

export const getPathParamsFromOperation = operation => {
  const params = get(operation, 'data.parameters');
  if (params === undefined) return false;
  const pathParams = params.filter(foo => foo.in === "path");
  return pathParams.length > 0 ? pathParams : false;
};

export const getQueryParamsFromOperation = operation => {
  const params = get(operation, 'data.parameters');
  if (params === undefined) return false;
  const pathParams = params.filter(foo => foo.in === "query");
  return pathParams.length > 0 ? pathParams : false;
};

export const getFormDataParamsFromOperation = operation => {
  //return false;
  const params = get(operation, 'data.parameters');
  if (params === undefined) return false;
  const bodyParam = params.find(foo => {
      return foo.in === "formData"
    }
  );
  return (bodyParam ? get(bodyParam, "schema.properties") : false) || false;
};


/**
 * @param id
 *
 *
 * Returns an array of summary objects by operation ID.
 * A summary object is easy to work with that just a schema object.
 *
 */

export const getSummaryArrayByOperationId = id => {
  const swaggerData = getAlreadyLoadedSwaggerData();

  const operation = getByOperationId(swaggerData, id);
  const postableParams = getBodyParamsFromOperation(operation) || getFormDataParamsFromOperation(operation);

  return Object.entries(postableParams).map(data => {
    return getSummaryFromSchemaItem(data[1], data[0]);
  });
};


/**
 *
 * @param id
 * @returns {{path: boolean, body: boolean, form: boolean, query: boolean}}
 *
 * Tells us what this endpoint expects in order to work
 *
 */
export const getDataExpectations = id => {
  const swaggerData = getAlreadyLoadedSwaggerData();

  const operation = getByOperationId(swaggerData, id);

  if (operation === undefined) {
    throw new Error('operationID "' + id + '" not found.');
  }
  const base = getBaseURL(swaggerData);
  const path = getPathParamsFromOperation(operation);
  const body = getBodyParamsFromOperation(operation);
  const form = getFormDataParamsFromOperation(operation);
  const query = getQueryParamsFromOperation(operation);

  //console.log("operation.", operation);

  return {
    hasPath: path !== false,
    hasBody: body !== false,
    hasForm: form !== false,
    hasQuery: query !== false,
    method: operation.method,
    url: base + operation.path
  }

};