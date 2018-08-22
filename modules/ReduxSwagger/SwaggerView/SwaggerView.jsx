/** Libraries */
import React from 'react';
import { compose } from 'redux';

/** Components */
import Operation from './Operation';

/** Helpers */
import { swaggerLoader } from '../lib/ReduxFormSwagger/index';
import { getAllOperationsFromSwagger } from '../lib/ReduxFormSwagger/data/helpers';
import { retreiveCachedSwaggerData } from '../lib/ReduxFormSwagger/data/utilities';
import { getAllConfig } from '../lib/ReduxFormSwagger/configuration';

/** Styles */
import './summary.css';

/** Class SummaryView */
class SummaryView extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			operations: [],
			openID: '',
			swaggerConfig: [],
		};
	}

	componentWillMount() {
		const swaggerData = retreiveCachedSwaggerData();
		const operations = getAllOperationsFromSwagger(swaggerData);
		const swaggerConfig = getAllConfig();

		this.setState({ operations, swaggerConfig });
	}

	render() {
		let lastNameSpace = '';
		const { apiKey, baseURL, swaggerEndPoint } = this.state.swaggerConfig;
		return (
			<div>
				<div className="view-swagger-config">
					<div className="swagger-view-container">
						<h1>Swagger View</h1>
						<strong>apiKey</strong>: {apiKey} <br />
						<strong>baseURL</strong>: {baseURL} <br />
						<strong>swaggerEndPoint</strong>: {swaggerEndPoint} <br />
					</div>
				</div>
				<div className="swagger-view-container">
					{this.state.operations.map(data => {
						const ret = (
							<div key={data.id}>
								{lastNameSpace === data.nameSpace ? (
									<span />
								) : (
									<h2 className="swaggerHeader">{data.nameSpace}</h2>
								)}
								<Operation
									isOpen={data.id === this.state.openID}
									key={data.id}
									data={data}
									openHandler={() => {
										this.setState({ openID: data.id });
									}}
									dispatch={this.props.dispatch}
								/>
							</div>
						);
						lastNameSpace = data.nameSpace;
						return ret;
					})}
				</div>
			</div>
		);
	}
}

export default compose(swaggerLoader)(SummaryView);
