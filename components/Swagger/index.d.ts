/** Libraries */
import React, { Validator } from 'react';
import { AxiosPromise } from 'axios';
import { ConfigProps } from 'redux-form';

export = Swagger;
export as namespace Swagger;

declare namespace Swagger {
	type Method = 'get' | 'put' | 'post' | 'patch' | 'delete';

	/** General Base Request */
	interface ApiRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
		method?: Method;
	}

	/** Get */
	interface GetRequestParams {
		query?: Object;
		path?: Object;
	}

	/** Post */
	interface PostRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
	}

	/** Put */
	interface PutRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
	}

	/** Patch */
	interface PatchRequestParams {
		query?: Object;
		path?: Object;
		body?: Object;
	}

	/** Delete */
	interface DeleteRequestParams {
		query?: Object;
		path?: Object;
	}

	class ApiRequest {
		Base: (apiPath: string, apiRequestParams: ApiRequestParams) => AxiosPromise;
		Get: (apiPath: string, apiRequestParams: GetRequestParams) => AxiosPromise;
		Post: (apiPath: string, apiRequestParams: PostRequestParams) => AxiosPromise;
		Patch: (apiPath: string, apiRequestParams: PatchRequestParams) => AxiosPromise;
		Put: (apiPath: string, apiRequestParams: PutRequestParams) => AxiosPromise;
		Delete: (apiPath: string, apiRequestParams: DeleteRequestParams) => AxiosPromise;
	}

	/**
	 * General
	 */
	interface Options {
		/** Refetches the data */
		refresh: () => void;
	}

	type FetchDataRenderFunction = (
		response: {
			isFetching?: boolean;
			hasFetchedSuccessfully?: boolean;
			data?: any;
			error?: any;
		},
		modifiedData: undefined | object,
		options: Options
	) => React.ReactNode;

	interface GeneralApiProps {
		/**
		 * This is the API path to fetch data from.
		 * If it needs a path arg or query arg, there are
		 * two ways to do so.
		 *
		 * 1. Insert it using a template string like below:
		 *
		 * `/user/account/${id}?type=${type}`
		 *
		 * 2. Provide the full path likw below:
		 * `post/user/account/{id}`
		 * and specify `pathArgs` & `queryArgs`.
		 *
		 * If you mix and match, the component will definitely
		 * throw an error.
		 */
		apiPath: string;
		pathArgs?: Object;
		queryArgs?: Object;
		/**
		 * Setting this parameter removes all the network
		 * request uses the supplied data. You can use it to
		 * test your component. Supplies
		 */
		mockData?: Object;
		modifier?: (value: any) => any;
	}

	/**
	 * FetchData
	 */
	interface FetchDataProps extends GeneralApiProps {
		children: React.ReactNode | FetchDataRenderFunction;
	}

	class FetchData extends React.Component<FetchDataProps> {}

	/**
	 * SendData
	 */
	type SendDataRenderFunction = (
		response: {
			isSending: boolean;
			hasSentSuccessfully?: boolean;
			data?: any;
			error?: any;
		},
		modifiedData: undefined | object
	) => React.ReactNode;

	interface SendDataProps extends GeneralApiProps, ConfigProps {
		data?: Object;
		type?: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
	}

	class SendData extends React.Component<SendDataProps> {}
}
