/* eslint-disable */
import React from 'react';
import ReactShow from 'react-show';

/**
 * @class Error
 * @augments React.Component<{ error: string, invalid: boolean }>
 */
class Error extends React.Component {
	render() {
		const { error, invalid } = this.props;

		return (
			<ReactShow show={invalid}>
				<div className="form-error">
					<p className="helper-text margin-top-1">{error}</p>
				</div>
			</ReactShow>
		);
	}
}

export default Error;
