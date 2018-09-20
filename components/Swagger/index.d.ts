import React from 'react';
import { AxiosPromise } from 'axios';

/** Api Request */
/**
 * ApiRequest
 */
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

async function Base(apiPath: string, apiRequestParams: ApiRequestParams): AxiosPromise<any>;

/**
 * Get
 */
interface GetRequestParams {
	query?: Object;
	path?: Object;
}

async function Get(apiPath: string, getRequestParams: GetRequestParams): AxiosPromise<any>;

/**
 * Post
 */
interface PostRequestParams {
	query?: Object;
	path?: Object;
	body?: Object;
}

async function Post(apiPath: string, postRequestParams: PostRequestParams): AxiosPromise<any>;

/**
 * Put
 */
interface PutRequestParams {
	query?: Object;
	path?: Object;
	body?: Object;
}

async function Put(apiPath: string, putRequestParams: PutRequestParams): AxiosPromise<any>;

/**
 * Patch
 */
interface PatchRequestParams {
	query?: Object;
	path?: Object;
	body?: Object;
}

async function Patch(apiPath: string, patchRequestParams: PatchRequestParams): AxiosPromise<any>;

/**
 * Delete
 */
interface DeleteRequestParams {
	query?: Object;
	path?: Object;
}

async function Delete(apiPath: string, deleteRequestParams: DeleteRequestParams): AxiosPromise<any>;
/** Api Request */

export = Swagger;
export as namespace Swagger;

declare namespace Swagger {
	const ApiRequest = {
		Base,
		Get,
		Post,
		Patch,
		Put,
		Delete,
	};

	/**
	 * General
	 */
	interface Utilities {
		/** Refetches the data */
		refresh: () => void;
	}

	type ChildFunction = (data: any, modifiedData: undefined | object, utilities: Utilities) => any;

	interface GeneralApiProps {
		/**
		 * This is the API path to fetch data from.
		 * If it needs a path arg or query arg, insert
		 * it using a template string like below:
		 *
		 * `/user/account/${id}?type=${type}`
		 */
		api: string;
		pathArgs?: Object;
		queryArgs?: Object;
		/**
		 * Setting this parameter removes all the network
		 * request uses the supplied data. You can use it to
		 * test your component. Supplies
		 */
		mockData?: Object;
	}

	/**
	 * FetchData
	 */
	interface FetchDataProps extends GeneralApiProps {
		modifier?: (value: Object) => any;
		children: React.ReactNode | ChildFunction;
	}

	class FetchData extends React.Component<FetchDataProps> {}

	/**
	 * SendData
	 */
	interface SendDataProps extends GeneralApiProps {
		data?: Object;
		type?: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
		children: React.ReactNode;
	}

	class SendData extends React.Component<SendDataProps> {}
}
