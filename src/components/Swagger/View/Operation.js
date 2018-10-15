/** Libraries */
import React from 'react';
import ReactShow from 'react-show';

/** Components */
import { Container, Row, Col, BodyOrFormParameter, PathOrQueryParameter } from './helpers';
import Action from './Action';

/** Helpers */
import {
	getBodyParamsForOperation,
	getFormParamsForOperation,
	getQueryParamsForOperation,
	getPathParamsForOperation,
	getObjectFromSwaggerSchema,
} from '../helpers';

/**
 * @typedef Data
 * @property {string[]} consumes
 * @property {string} operationId
 * @property {Object[]} parameters
 * @property {string[]} produces
 * @property {Object} responses
 * @property {Object[]} security
 * @property {string[]} tags
 * @property {string} consumes
 */

/**
 * @typedef OperationProps
 * @property {string} id
 * @property {string} action
 * @property {string} method
 * @property {string} nameSpace
 * @property {string} operationId
 * @property {string} path
 * @property {string} [summary = undefined]
 * @property {Data} data
 *
 */

/**
 * @typedef OperationStateProps
 * @property {boolean} isOpen
 */

/**
 * @class Operation
 * @augments React.Component<OperationProps, OperationStateProps>
 */
class Operation extends React.Component {
	state = {
		isOpen: false,
	};

	toggleOperationDetails = () =>
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}));

	render() {
		const { data, id, method, path, summary } = this.props;
		const { isOpen } = this.state;

		const bodyParams = getBodyParamsForOperation(data),
			pathParams = getPathParamsForOperation(data),
			queryParams = getQueryParamsForOperation(data),
			formParams = getFormParamsForOperation(data);

		return (
			<Container style={{ marginTop: 8 }}>
				<Row className={`operation ${method.toLowerCase()}`} onClick={this.toggleOperationDetails}>
					<Col xs={2} md={1} className={`flex center method ${method.toLowerCase()}`}>
						<p>{method}</p>
					</Col>

					<Col xs={10} md={11} className="flex start" style={{ height: 32 }}>
						<code style={{ color: '#000' }}>{path}</code>
					</Col>
				</Row>

				<ReactShow show={isOpen} transitionOnMount>
					<Row
						className={`operation-details ${method.toLowerCase()} ${isOpen ? 'open' : 'closed'}`}>
						{/* Summary */}
						{summary &&
							summary.length > 0 && (
								<Col xs={12}>
									<p className="detail">Description</p>
									<p className="margin-bottom-2">{summary}</p>
								</Col>
							)}

						{/* Copying operations for use in components */}
						<Col xs={12}>
							<p className="detail">Operation Path</p>

							<ul>
								<li className="flex between">
									<p className="flex start">
										Full path: &nbsp;&nbsp;
										<strong>
											<code>{id}</code>
										</strong>
									</p>

									<Action type="Copy" text={id} />
								</li>

								<li className="flex between">
									<p className="flex start">
										Short path: &nbsp;&nbsp;
										<strong>
											<code>{path.replace('/api/v1', '')}</code>
										</strong>
									</p>

									<Action type="Copy" text={path.replace('/api/v1', '')} />
								</li>
							</ul>
						</Col>

						{/* Body Parameters */}
						{bodyParams && (
							<Col xs={12}>
								<p className="detail margin-top-3">Body Parameters</p>

								<table className="params body">
									<thead>
										<tr>
											<th>Name</th>
											<th>Type</th>
											<th>Label</th>
											<th>Features</th>
											<th>Component</th>
										</tr>
									</thead>

									<tbody>
										{Object.entries(bodyParams).map((param, index) => (
											<BodyOrFormParameter
												key={index}
												name={param[0]}
												summary={getObjectFromSwaggerSchema(param[1])}
											/>
										))}
									</tbody>
								</table>
							</Col>
						)}

						{/* Path Parameters */}
						{pathParams && (
							<Col xs={12}>
								<p className="detail margin-top-3">Path Parameters</p>

								<table className="params path">
									<thead>
										<tr>
											<th>Name</th>
											<th>Type</th>
											<th>Format</th>
										</tr>
									</thead>

									<tbody>
										{pathParams.map((param, index) => (
											<PathOrQueryParameter key={index} name={param.name} summary={param} />
										))}
									</tbody>
								</table>
							</Col>
						)}

						{/* Query Parameters */}
						{queryParams && (
							<Col xs={12}>
								<p className="detail margin-top-3">Query Parameters</p>

								<table className="params query">
									<thead>
										<tr>
											<th>Name</th>
											<th>Type</th>
											<th>Format</th>
										</tr>
									</thead>

									<tbody>
										{queryParams.map((param, index) => (
											<PathOrQueryParameter key={index} name={param.name} summary={param} />
										))}
									</tbody>
								</table>
							</Col>
						)}

						{/* Form Data Parameters */}
						{formParams && (
							<Col xs={12}>
								<p className="detail margin-top-3">FormData Parameters</p>

								<table className="params body">
									<thead>
										<tr>
											<th>Name</th>
											<th>Type</th>
											<th>Label</th>
											<th>Features</th>
											<th>Component</th>
										</tr>
									</thead>

									<tbody>
										{Object.entries(formParams).map((param, index) => (
											<BodyOrFormParameter
												key={index}
												name={param[0]}
												summary={getObjectFromSwaggerSchema(param[1])}
											/>
										))}
									</tbody>
								</table>
							</Col>
						)}
					</Row>
				</ReactShow>
			</Container>
		);
	}
}

export default Operation;
