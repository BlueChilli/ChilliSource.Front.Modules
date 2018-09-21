/** Libraries */
import React, { Validator } from 'react';
import { AxiosPromise } from 'axios';

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

	const ApiRequest = {
		Base: (apiPath: string, apiRequestParams: ApiRequestParams) => AxiosPromise,
		Get: (apiPath: string, apiRequestParams: GetRequestParams) => AxiosPromise,
		Post: (apiPath: string, apiRequestParams: PostRequestParams) => AxiosPromise,
		Patch: (apiPath: string, apiRequestParams: PatchRequestParams) => AxiosPromise,
		Put: (apiPath: string, apiRequestParams: PutRequestParams) => AxiosPromise,
		Delete: (apiPath: string, apiRequestParams: DeleteRequestParams) => AxiosPromise,
	};

	/**
	 * General
	 */
	interface Options {
		/** Refetches the data */
		refresh: () => void;
	}

	type FetchDataRenderFunction = (
		data: {
			isFetching?: boolean;
			data?: any;
			error?: any;
		},
		modifiedData: undefined | object,
		options: Options
	) => React.ReactNode;

	interface GeneralApiProps {
		/**
		 * This is the API path to fetch data from.
		 * If it needs a path arg or query arg, insert
		 * it using a template string like below:
		 *
		 * `/user/account/${id}?type=${type}`
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
	}

	/**
	 * FetchData
	 */
	interface FetchDataProps extends GeneralApiProps {
		modifier?: (value: Object) => any;
		children: React.ReactNode | FetchDataRenderFunction;
	}

	class FetchData extends React.Component<FetchDataProps> {}

	/**
	 * SendData
	 */
	type SendDataRenderFunction = (
		data: {
			isSending?: boolean;
			data?: any;
			error?: any;
		},
		modifiedData: undefined | object,
		options: Options
	) => React.ReactNode;

	interface SendDataProps extends GeneralApiProps {
		data?: Object;
		type?: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
		children: React.ReactNode | SendDataRenderFunction;
	}

	class SendData extends React.Component<SendDataProps> {}
}
