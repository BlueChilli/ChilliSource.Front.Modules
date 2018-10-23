import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = props => {
	const { to, icon: Icon = null, fontAwesomeIcon } = props;
	return (
		<li>
			<NavLink to={to} className="menu-item">
				{fontAwesomeIcon && <FontAwesomeIcon icon={fontAwesomeIcon} style={{ marginRight: 8 }} />}
				{Icon && <Icon />}
				{props.label}
			</NavLink>
		</li>
	);
};

MenuItem.propTypes = {
	to: PropTypes.string.isRequired,
};

export default MenuItem;
