/** Libraries */
import React from 'react';

/**
 * @class Wrapper
 * @augments React.Component<{}>
 */
class Wrapper extends React.Component {
	render() {
		const { className, children } = props;

		return <div className={`form-element ${className ? className : ''}`}>{children}</div>;
	}
}

export default Wrapper;
