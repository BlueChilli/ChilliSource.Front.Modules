import React from 'react';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';
import { slide as Menu } from 'react-burger-menu';
import './css.scss';

const Desktop = props => {
	const { className, rightAlign = false } = props;
	const ulclasses = classnames('navbar__list', { right_align: rightAlign });
	const rootclasses = classnames('navbar_desktop', className && className.root);

	return (
		<nav className={rootclasses}>
			<ul className={ulclasses}>{props.children}</ul>
		</nav>
	);
};

const Mobile = props => {
	return (
		<div className="navbar_mobile_wrapper">
			<Menu className="navbar_mobile">{props.children}</Menu>
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

export default ResponsiveMenu;
