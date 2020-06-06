import React from "react";
import { Link } from "gatsby";

// import logo from "../img/logo.svg";
import logo from "../img/logo3.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <img
          src={logo}
          alt="Haus Grubmühle"
          style={{ width: "14em", height: "10em" }}
        />
        <ul className="menu-list">
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              Über uns
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/apartment">
              Apartment
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Impressum
            </Link>
          </li>
          <li>
            <a
              className="navbar-item"
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </li>
        </ul>
      </footer>
    );
  }
};

export default Footer;
