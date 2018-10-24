import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

const MenuItem = props => {
	const { to, icon: Icon = null, fontAwesomeIcon, label, className, ...remainingProps } = props;
	const classes = classnames('menu-item', className && className);

	return (
		<li>
			<NavLink to={to} className={classes} {...remainingProps}>
				{fontAwesomeIcon && <FontAwesomeIcon icon={fontAwesomeIcon} style={{ marginRight: 8 }} />}
				{Icon && <Icon />}
				{label}
			</NavLink>
		</li>
	);
};

MenuItem.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default MenuItem;
