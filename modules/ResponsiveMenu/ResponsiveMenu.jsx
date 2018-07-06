import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import "./css.css";
import MediaQuery from "react-responsive";

const ResponsiveMenu = (props) => {
  return (
    <MediaQuery maxWidth={767}>
      {(matches) => {

        if (matches) {
          return <Hamburger {...props}/>
        } else {
          return <Navbar {...props}/>
        }
      }}
    </MediaQuery>
  )
};


class Hamburger extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {menuOpen: false};
  }

  stateChangeHandler(stateOf) {
    this.setState({menuOpen: stateOf.isOpen});
  }

  render() {
    return (
      <div className="navbar-mobile-container" onClick={() => {
        this.setState({menuOpen: false})
      }}>
        <Menu right isOpen={this.state.menuOpen} onStateChange={(state) => {
          this.stateChangeHandler(state);
        }}>
          <nav className="navbar-responsive navbar-mobile">
            {this.props.children}
          </nav>
        </Menu>
      </div>
    )
  }
}


class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar-responsive navbar-desktop">
        {this.props.children}
      </nav>
    )
  }

}


export default ResponsiveMenu;