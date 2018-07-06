import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import faCaretDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import onClickOutside from "react-onclickoutside";

// import "./css.css";

class SubMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {expanded: false};
  }

  toggleState(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.setState({expanded: !this.state.expanded});
  }

  handleClickOutside = evt => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Fragment>
        <li className="navbar-responsive__list-item">
                    <span
                      className="submenu-item"
                      onClick={this.toggleState.bind(this)}
                    >
                        {this.props.label}
                      <FontAwesomeIcon icon={faCaretDown}/>
                    </span>
          {this.state.expanded && (
            <ul className="submenu-items">{this.props.children}</ul>
          )}
        </li>
      </Fragment>
    );
  }
}

export default onClickOutside(SubMenu);
