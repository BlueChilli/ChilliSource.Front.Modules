import React, { FocusEvent } from 'react';

export = Swagger;
export as namespace Swagger;

declare namespace Swagger {
	interface GeneralApiProps {
		/**
		 * This is the API path to fetch data from.
		 * If it needs a path arg or query arg, insert
		 * it using a template string like below:
		 *
		 * `/user/account/${id}?type=${type}`
		 */
		api: string;
	}

	/**
	 * Fetch
	 */
	interface FetchProps extends GeneralApiProps {}

	class FetchData extends React.Component<FetchProps> {}

	/**
	 * Send
	 */
	interface SendProps extends GeneralApiProps {
		data?: Object;
		type?: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
	}

	class SendData extends React.Component<SendProps> {}
}
