import React from 'react';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';
import { slide as Menu } from 'react-burger-menu';
import './css.scss';
import PropTypes from 'prop-types';

const Desktop = props => {
	const { className, rightAlign = false, ...remainingProps } = props;
	const ulclasses = classnames('navbar__list', { right_align: rightAlign });
	const rootclasses = classnames('navbar_desktop', className && className.root);

	return (
		<nav className={rootclasses} {...remainingProps}>
			<ul className={ulclasses}>{props.children}</ul>
		</nav>
	);
};

const Mobile = props => {
	const { rightAlign, className, ...remainingProps } = props;
	const rootClasses = classnames('navbar_mobile_wrapper', className && className.root);

	return (
		<div className={rootClasses} {...remainingProps}>
			<Menu className="navbar_mobile" side={rightAlign ? 'right' : 'left'}>
				{props.children}
			</Menu>
		</div>
	);
};

const ResponsiveMenu = props => {
	const { breakpoint, ...remainingProps } = props;
	return (
		<MediaQuery maxWidth={breakpoint}>
			{isMatched => (isMatched ? <Mobile {...remainingProps} /> : <Desktop {...remainingProps} />)}
		</MediaQuery>
	);
};

ResponsiveMenu.propTypes = {
	breakpoint: PropTypes.number,
};

ResponsiveMenu.defaultProps = {
	breakpoint: 768,
};

export default ResponsiveMenu;
