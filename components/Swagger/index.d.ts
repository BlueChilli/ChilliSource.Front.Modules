/** Libraries */
import React, { Validator } from 'react';
import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { ConfigProps } from 'redux-form';

export = Swagger;
export as namespace Swagger;

declare namespace Swagger {
	type Method = 'get' | 'put' | 'post' | 'patch' | 'delete';

	/** General Base Request */
	interface GeneralApiRequestProps extends AxiosRequestConfig {
		query?: Object;
		path?: Object;
	}

	interface SubmitDataToApiProps {
		body?: Object;
	}

	interface ApiRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {
		method?: Method;
	}

	/** Get */
	interface GetRequestParams extends GeneralApiRequestProps {}

	/** Post */
	interface PostRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {}

	/** Put */
	interface PutRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {}

	/** Patch */
	interface PatchRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {}

	/** Delete */
	interface DeleteRequestParams extends GeneralApiRequestProps {}

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
		 * two ways to do so:
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
		 * request(s) & uses the supplied data. You can use
		 * it to test your component.
		 */
		mockData?: Object;
		/**
		 * Any custom data modifier function that
		 * modifies the response from the request.
		 */
		modifier?: (value: any) => any;
		/**
		 * A callback function to execute once the API
		 * request is successfully completed. If the
		 * request fails, then this function is not
		 * executed. Its YOUR responsibility to handle
		 * errors encountered.
		 *
		 * NOTE: If you specify this property, then your
		 * child components will be returned as is without
		 * any `data` or `modifiedData` properties. If you
		 * have provided a render function instead, then
		 * `data` and `modifiedData` will always be undefined
		 */
		onRequestIsSuccessful?: (data: any) => any;
	}

	/**
	 * FetchData
	 */
	interface FetchDataProps extends GeneralApiProps {
		children: React.ReactNode | FetchDataRenderFunction;
	}

	/**
	 * @class FetchData
	 * @description A simple component to fetch data from an API.
	 */
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
