import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

class SubMenu extends React.Component {
	state = {
		extended: false,
	};

	handleClick = () => {
		this.setState({ extended: !this.state.extended });
	};

	handleClickOutside = evt => {
		const { extended } = this.state;
		if (extended) {
			this.setState({ extended: false });
		}
	};

	renderChildren = () => {
		const { children } = this.props;
		return React.Children.map(children, child =>
			React.cloneElement(child, { onClick: this.handleClick })
		);
	};

	render() {
		const { extended } = this.state;
		const { label, children, className, ...remainingProps } = this.props;
		const subMenuClasses = classnames('navbar__submenu_dropdown', className && className);

		return (
			<li>
				<span onClick={this.handleClick} className="submenu__item">
					{label}
					<FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 8 }} />
				</span>
				{extended && (
					<ul className={subMenuClasses} {...remainingProps}>
						{this.renderChildren()}
					</ul>
				)}
			</li>
		);
	}
}

SubMenu.propTypes = {
	label: PropTypes.string.isRequired,
};

export default onClickOutside(SubMenu);
