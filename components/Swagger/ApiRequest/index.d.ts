export = ApiRequest;
export as namespace ApiRequest;

declare namespace ApiRequest {
	type Method = 'get' | 'put' | 'post' | 'patch' | 'delete';

	/**
	 * General Base Request
	 */
	interface ApiRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
		method?: Method;
	}

	async function Base(apiPath: string, apiRequestParams: ApiRequestParams): Promise;

	/**
	 * Get
	 */
	interface GetRequestParams {
		query?: Object;
		path?: Object;
	}

	async function Get(apiPath: string, getRequestParams: GetRequestParams): Promise;

	/**
	 * Post
	 */
	interface PostRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
	}

	async function Post(apiPath: string, postRequestParams: PostRequestParams): Promise;

	/**
	 * Put
	 */
	interface PutRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
	}

	async function Put(apiPath: string, putRequestParams: PutRequestParams): Promise;

	/**
	 * Patch
	 */
	interface PatchRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
	}

	async function Patch(apiPath: string, patchRequestParams: PatchRequestParams): Promise;

	/**
	 * Delete
	 */
	interface DeleteRequestParams {
		query?: Object;
		path?: Object;
	}

	async function Delete(apiPath: string, deleteRequestParams: DeleteRequestParams): Promise;
}
