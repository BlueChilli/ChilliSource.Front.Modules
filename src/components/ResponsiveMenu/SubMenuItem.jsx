import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SubMenu extends React.Component {
	state = {
		extended: false,
	};

	handleClick = () => {
		this.setState({ extended: !this.state.extended });
	};

	render() {
		const { extended } = this.state;
		const { label, children, className, ...remainingProps } = this.props;
		const subMenuClasses = classnames('navbar__submenu_dropdown', className && className);

		return (
			<li>
				<span onClick={this.handleClick}>
					{label}
					<FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 8 }} />
				</span>
				{extended && (
					<ul className={subMenuClasses} {...remainingProps}>
						{children}
					</ul>
				)}
			</li>
		);
	}
}

SubMenu.propTypes = {
	label: PropTypes.string.isRequired,
};

export default SubMenu;
