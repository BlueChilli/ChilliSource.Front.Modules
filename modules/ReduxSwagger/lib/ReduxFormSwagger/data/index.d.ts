type NetworkRequestType =
	| 'put'
	| 'patch'
	| 'delete'
	| 'get'
	| 'post'
	| 'options'
	| 'head'
	| 'request';

interface Operation {
	id: string;
	path: string;
	method: string;
	operationId: string;
	nameSpace: string;
	action: string;
	summary: string;
	data: object;
}

interface ApiRequirements {
	hasPath: boolean;
	hasBody: boolean;
	hasForm: boolean;
	hasQuery: boolean;
	method: NetworkRequestType;
	url: string;
}

interface SchemaItem {
	maxLength?: number;
}

export function getApiRequirements(id: string): ApiRequirements;

export function loadSwaggerData(): Promise<any>;
