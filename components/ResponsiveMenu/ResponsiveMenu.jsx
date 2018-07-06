import React from "react";
import classnames from "classnames";
import { slide as Menu } from "react-burger-menu";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";

// import "./css.css";

const ResponsiveMenu = props => {
    const { responsiveWidth } = props;

    return (
        <MediaQuery maxWidth={responsiveWidth}>
            {matches => {
                if (matches) {
                    return <Hamburger {...props} />;
                }
                return <Navbar {...props} />;
            }}
        </MediaQuery>
    );
};

ResponsiveMenu.propTypes = {
    responsiveWidth: PropTypes.number.isRequired
};

ResponsiveMenu.defaultProps = {
    responsiveWidth: 767
};

class Hamburger extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { menuOpen: false };
    }

    stateChangeHandler(stateOf) {
        this.setState({ menuOpen: stateOf.isOpen });
    }

    render() {
        const { theme, position, className } = this.props;
        const themeClass = theme ? "navbar-responsive-" + theme : null;
        const positionClass = position ? "navbar-responsive-" + position : null;
        const navClasses = classnames(
            "navbar-responsive",
            "navbar-mobile",
            themeClass,
            className,
            positionClass
        );

        return (
            <div
                className="bm-wrapper"
                onClick={() => {
                    this.setState({ menuOpen: false });
                }}
                style={this.props.style}
            >
                <Menu
                    className={`bm-menu-${this.props.theme}`}
                    {...this.props}
                    isOpen={this.state.menuOpen}
                    onStateChange={state => {
                        this.stateChangeHandler(state);
                    }}
                >
                    {this.state.menuOpen && (
                        <nav className={navClasses}>
                            <ul className="menu-items">
                                {this.props.children}
                            </ul>
                        </nav>
                    )}
                </Menu>
            </div>
        );
    }
}

class Navbar extends React.Component {
    render() {
        const { theme, position, className } = this.props;
        const themeClass = theme ? "navbar-" + theme : null;
        const positionClass = position ? "navbar-" + position : null;
        const navClasses = classnames(
            "navbar-responsive",
            "navbar-desktop",
            themeClass,
            className,
            positionClass
        );

        return (
            <nav className={navClasses}  style={this.props.style}>
                <ul className="navbar-responsive__list">
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export default ResponsiveMenu;
export { Hamburger, Navbar };
