import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import onClickOutside from 'react-onclickoutside';

const classnames = require('classnames');

class SubMenu extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { expanded: false };
	}

	toggleState(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		this.setState({ expanded: !this.state.expanded });
	}

	handleClickOutside = evt => {
		this.setState({ expanded: false });
	};

	render() {
		const { className, style } = this.props;
		const submenuItemStyle = classnames('navbar-responsive__list-item');
		const dropdownStyle = classnames('submenu-items', className);

		return (
			<Fragment>
				<li className={submenuItemStyle}>
					<span className="submenu-item" onClick={this.toggleState.bind(this)}>
						{this.props.label}
						<FontAwesomeIcon icon={faCaretDown} />
					</span>
					{this.state.expanded && (
						<ul className={dropdownStyle} style={style || null}>
							{this.props.children}
						</ul>
					)}
				</li>
			</Fragment>
		);
	}
}

export default onClickOutside(SubMenu);
