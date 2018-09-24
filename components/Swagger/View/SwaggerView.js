/** Libraries */
import React from 'react';
import { ClipLoader } from 'react-spinners';
import groupBy from 'lodash/groupBy';
import ReactShow from 'react-show';

/** Components */
import { Container, Row, Col } from './helpers';
import Operation from './Operation';
import Action from './Action';

/** Helpers */
import { loadSwaggerData, getAllOperationsFromSwagger, getAllConfig } from '../helpers';

/** Styles */
import './index.css';

/**
 * @typedef SwaggerViewStateProps
 * @property {Operation[]} [operations = undefined]
 * @property {SwaggerConfig} [config = undefined]
 * @property {string} [nameSpaceOpened = undefined]
 */

/**
 * @class SwaggerView
 * @augments React.Component<{}, SwaggerViewStateProps>
 */
class SwaggerView extends React.Component {
	state = {
		operations: undefined,
		config: undefined,
		nameSpaceOpened: undefined,
	};

	componentDidMount() {
		loadSwaggerData().then(response => {
			const operations = getAllOperationsFromSwagger(response.data);
			const config = getAllConfig();

			this.setState(prevState => ({
				operations,
				config,
			}));
		});
	}

	toggleNameSpace = namespace => () =>
		this.setState(prevState => {
			if (namespace === prevState.nameSpaceOpened) {
				return {
					nameSpaceOpened: undefined,
				};
			} else {
				return {
					nameSpaceOpened: namespace,
				};
			}
		});

	render() {
		const { operations, nameSpaceOpened } = this.state;

		if (!operations) {
			return (
				<Container>
					<Row>
						<Col xs={12}>
							<h1>Swagger View</h1>
						</Col>

						<Col xs={12} className="flex center margin-top-2">
							<ClipLoader loading={true} color="#7ED321" size={32} />
						</Col>
					</Row>
				</Container>
			);
		}

		const groupedOperations = groupBy(operations, 'nameSpace');
		const groupedOperationsKeys = Object.keys(groupedOperations);
		return (
			<React.Fragment>
				<Container>
					<Row>
						<Col xs={12}>
							<h1>Swagger View</h1>
						</Col>
					</Row>
				</Container>
				{groupedOperationsKeys.map((operationKey, key) => {
					// Check whether current one is the namespace currently
					// opened by the user
					const isCurrentNameSpace = nameSpaceOpened === operationKey;

					return (
						<React.Fragment key={key}>
							<Container>
								<Row
									className={`namespace margin-top-1`}
									onClick={this.toggleNameSpace(operationKey)}>
									<Col xs={10} sm={11}>
										<h3 style={{ fontSize: '20px', lineHeight: '40px' }}>{operationKey}</h3>
									</Col>

									<Col xs={2} sm={1}>
										<Action
											type={isCurrentNameSpace ? 'Collapse' : 'Expand'}
											className={isCurrentNameSpace ? 'rotate' : ''}
										/>
									</Col>
								</Row>
							</Container>

							<ReactShow show={isCurrentNameSpace} transitionOnMount>
								{groupedOperations[operationKey].map((operation, index) => (
									<Operation key={index} {...operation} />
								))}
							</ReactShow>

							{isCurrentNameSpace && <div className="margin-top-4" />}
						</React.Fragment>
					);
				})}
			</React.Fragment>
		);
	}
}

export default SwaggerView;
