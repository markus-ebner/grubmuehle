import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo_reversed.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <img
          src={logo}
          alt="Haus Grubmühle"
          style={{ width: "14em", height: "10em" }}
        />
        <div
          style={{ display: "flex", alignItems: "center", margin: "0 20px" }}
        >
          <p>
            Grubmühlenweg 8<br />
            9554 St. Urban
          </p>
          <a href="mailto:claudia.sonvilla@aon.at?subject=Urlaub im Haus Grubmühle">
            claudia.sonvilla@aon.at
          </a>
        </div>
        <ul className="menu-list">
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/apartment">
              Ferienhaus
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/price">
              Preise
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              Über uns
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
            <Link className="navbar-item" to="/impressum">
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
          <img
            src="/img/urlaub_am_bhof.png"
            alt="Urlaub am Bauernhof"
            style={{ width: "133px", height: "45px" }}
          />
        </ul>
      </footer>
    );
  }
};

export default Footer;
