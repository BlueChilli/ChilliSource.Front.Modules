import React from 'react';
import { Link } from 'react-router-dom';

const classnames = require('classnames');

class MenuItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		if (this.props.hideIf === true) return null;
		if (this.props.showIf === false) return null;
		const { style, className } = this.props;
		const listItemStyle = classnames('navbar-responsive__list-item');

		return (
			<li className={listItemStyle}>
				<Link to={this.props.to} className={className} style={style || null}>
					{this.props.children}
				</Link>
			</li>
		);
	}
}

export default MenuItem;
