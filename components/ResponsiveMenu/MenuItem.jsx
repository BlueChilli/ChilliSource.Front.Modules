import React from "react";
import { Link } from "react-router-dom";

// import "./css.css";

class MenuItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        if (this.props.hideIf === true) return null;
        if (this.props.showIf === false) return null;

        return (
            <li className="navbar-responsive__list-item">
                <Link to={this.props.to}>{this.props.children}</Link>
            </li>
        );
    }
}

export default MenuItem;
