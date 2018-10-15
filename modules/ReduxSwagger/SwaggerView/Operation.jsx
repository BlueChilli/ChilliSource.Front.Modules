/** Libraries */
import React from 'react';

/** Components */
import { BodyParamItem, FormParamItem, PathParamItem } from './SwaggerRowTableItems';

/** Helpers */
import {
	getBodyParamsForOperation,
	getQueryParamsForOperation,
	getFormParamsForOperation,
	getPathParamsForOperation,
} from '../lib/ReduxFormSwagger/data/helpers';
import { getSchemaItemSummary } from '../lib/ReduxFormSwagger/data/utilities';

/** Styles */
import './summary.css';

/** Class Operation */
const Operation = props => {
	const {
		data,
		openHandler,
		isOpen,
		data: { id, method, operationId, path, summary },
	} = props;
	//console.log(id, data);
	const bodyParams = getBodyParamsForOperation(data);
	const pathParams = getPathParamsForOperation(data);
	const queryParams = getQueryParamsForOperation(data);
	const formDataParams = getFormParamsForOperation(data);

	const methodClass = `label ${method.toLowerCase()}`;

	const classes = isOpen ? 'swaggerInfo open' : 'swaggerInfo';

	if (isOpen) {
		console.log('OPENED', data);
	}

	return (
		<div className={classes}>
			<div className="heading-wrapper" onClick={openHandler}>
				<div className="heading-left">
					<span className={methodClass}>{method}</span>
					{path}
				</div>
				<div className="heading-right">
					<Labels b={bodyParams} p={pathParams} q={queryParams} f={formDataParams} />
				</div>
			</div>

			{isOpen && (
				<div className="content">
					{summary && <div className="summary">{summary}</div>}

					<div className="desc">
						<strong>id:</strong> {id}
					</div>
					<div className="desc">
						<strong>OperationId:</strong> {operationId}
					</div>

					{bodyParams && (
						<div>
							<h3 className="table-heading">Body Parameters </h3>
							<table className="swagger-table">
								<tbody>
									<tr>
										<th />
										<th>name</th>
										<th>type</th>
										<th>title</th>
										<th>features</th>
										<th>FieldType</th>
									</tr>
									{Object.entries(bodyParams).map(data => {
										const summary = getSchemaItemSummary(data[1]);
										return <BodyParamItem key={data[0]} name={data[0]} data={summary} />;
									})}
								</tbody>
							</table>
						</div>
					)}

					{pathParams && (
						<div>
							<h3 className="table-heading">Path Parameters </h3>
							<table className="swagger-table">
								<tbody>
									<tr>
										<th />
										<th>name</th>
										<th>format</th>
										<th>type</th>
									</tr>
									{pathParams.map(data => {
										return <PathParamItem key={data.name} data={data} />;
									})}
								</tbody>
							</table>
						</div>
					)}

					{queryParams && (
						<div>
							<h3 className="table-heading">Query String Parameters </h3>
							<table className="swagger-table">
								<tbody>
									<tr>
										<th />
										<th>name</th>
										<th>format</th>
										<th>type</th>
									</tr>
									{queryParams.map(data => (
										<PathParamItem key={data.name} data={data} />
									))}
								</tbody>
							</table>
						</div>
					)}

					{formDataParams && (
						<div>
							<h3 className="table-heading">Form Data Parameters </h3>
							<table className="swagger-table">
								<tbody>
									<tr>
										<th />
										<th>name</th>
										<th>type</th>
										<th>title</th>
										<th>features</th>
										<th>FieldType</th>
									</tr>
									{Object.entries(formDataParams).map(data => {
										const summary = getSchemaItemSummary(data[1]);
										return <FormParamItem key={data[0]} name={data[0]} data={summary} />;
									})}
								</tbody>
							</table>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

const Labels = ({ b, p, q, f }) => {
	return (
		<div className="summary-labels">
			{b && <span className="b">Body</span>}
			{p && <span className="p">Path</span>}
			{q && <span className="q">QueryString</span>}
			{f && <span className="f">Form Data</span>}
		</div>
	);
};

export default Operation;
