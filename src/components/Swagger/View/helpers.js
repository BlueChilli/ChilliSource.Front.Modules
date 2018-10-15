/** Libraries */
import React from 'react';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

/** Helpers */
import { getFieldDataType } from '../helpers';

/** Initialisation */
setConfiguration({
	gutterWidth: 16,
	containerWidths: [540, 750, 960, 960],
});

/** Class FluidContainer */
class FluidContainer extends React.Component {
	render() {
		return <Container fluid xs sm md {...this.props} />;
	}
}

/**
 * @typedef BodyOrFormParameterProps
 * @property {string} name
 * @property {Object} summary
 */

/**
 * @class BodyOrFormParameter
 * @augments React.Component<BodyOrFormParameterProps, {}>
 */
class BodyOrFormParameter extends React.Component {
	render() {
		const { name, summary } = this.props;
		const { title, type, features } = summary;

		return (
			<tr>
				{/* Name */}
				<td>
					<strong>
						<code>{name}</code>
					</strong>
				</td>

				{/* Type */}
				<td>{type}</td>

				{/* Title */}
				<td>{title}</td>

				{/* Features */}
				<td>{features.join(', ') || '-'}</td>

				{/* Field */}
				<td>
					<strong>
						<code>{getFieldDataType(summary)}</code>
					</strong>
				</td>
			</tr>
		);
	}
}

/**
 * @typedef PathOrQueryParameterProps
 * @property {string} name
 * @property {Object} summary
 */

/**
 * @class PathOrQueryParameter
 * @augments React.Component<PathOrQueryParameterProps, {}>
 */
class PathOrQueryParameter extends React.Component {
	render() {
		const { name, summary } = this.props;
		const { format, type } = summary;

		return (
			<tr>
				{/* Name */}
				<td>
					<strong>
						<code>{name}</code>
					</strong>
				</td>

				{/* Type */}
				<td>{type}</td>

				{/* Format */}
				<td>{format}</td>
			</tr>
		);
	}
}

export { FluidContainer as Container, Row, Col, BodyOrFormParameter, PathOrQueryParameter };
