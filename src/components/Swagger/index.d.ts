/** Libraries */
import React, { Validator } from 'react';
import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { ConfigProps } from 'redux-form';

export as namespace Swagger;

/** API Request */
export namespace ApiRequest {
	export type Method = 'get' | 'put' | 'post' | 'patch' | 'delete';

	/** General Base Request */
	export interface GeneralApiRequestProps extends AxiosRequestConfig {
		query?: Object;
		path?: Object;
	}

	export interface SubmitDataToApiProps {
		body?: Object;
	}

	export interface ApiRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {
		method?: Method;
	}

	/** Get */
	export interface GetRequestParams extends GeneralApiRequestProps {}

	/** Post */
	export interface PostRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {}

	/** Put */
	export interface PutRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {}

	/** Patch */
	export interface PatchRequestParams extends GeneralApiRequestProps, SubmitDataToApiProps {}

	/** Delete */
	export interface DeleteRequestParams extends GeneralApiRequestProps {}

	export function Base(apiPath: string, apiRequestParams: ApiRequestParams): AxiosPromise;
	export function Get(apiPath: string, apiRequestParams: GetRequestParams): AxiosPromise;
	export function Post(apiPath: string, apiRequestParams: PostRequestParams): AxiosPromise;
	export function Patch(apiPath: string, apiRequestParams: PatchRequestParams): AxiosPromise;
	export function Put(apiPath: string, apiRequestParams: PutRequestParams): AxiosPromise;
	export function Delete(apiPath: string, apiRequestParams: DeleteRequestParams): AxiosPromise;
}

/**
 * General
 */
export interface Options {
	/** Refetches the data */
	refresh: () => void;
}

export type FetchDataRenderFunction = (
	response: {
		isFetching?: boolean;
		hasFetchedSuccessfully?: boolean;
		data?: any;
		error?: any;
	},
	modifiedData: undefined | object,
	options: Options
) => React.ReactNode;

export interface GeneralApiProps {
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
export interface FetchDataProps extends GeneralApiProps {
	children: React.ReactNode | FetchDataRenderFunction;
}

/**
 * @class FetchData
 * @description A simple component to fetch data from an API.
 */
export class FetchData extends React.Component<FetchDataProps> {}

/**
 * SendData
 */
export type SendDataRenderFunction = (
	response: {
		isSending: boolean;
		hasSentSuccessfully?: boolean;
		data?: any;
		error?: any;
	},
	modifiedData: undefined | object
) => React.ReactNode;

export interface SendDataProps extends GeneralApiProps, ConfigProps {
	data?: Object;
	type?: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
}

export class SendData extends React.Component<SendDataProps> {}
