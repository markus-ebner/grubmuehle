import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }
  checkKey = (event) => {
    if (event.keyCode === 13) {
      this.toggleHamburger();
    }
  };
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Zur Grubmühle"
                style={{ width: "100px", maxHeight: "none" }}
              />
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              style={{ height: "unset" }}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={(event) => this.checkKey(event)}
              role="menu"
              aria-label="Menü öffnen"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link
                className="navbar-item"
                to="/apartment"
                activeClassName="navbar-item-active"
              >
                Ferienhaus
              </Link>
              <Link
                className="navbar-item"
                to="/price"
                activeClassName="navbar-item-active"
              >
                Preise
              </Link>
              <Link
                className="navbar-item"
                to="/about"
                activeClassName="navbar-item-active"
              >
                Über uns
              </Link>
              <Link
                className="navbar-item"
                to="/blog"
                activeClassName="navbar-item-active"
              >
                News vom Hof
              </Link>
              <Link
                className="navbar-item"
                to="/contact"
                activeClassName="navbar-item-active"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
