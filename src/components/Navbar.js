import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Button1 } from "./Button1";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Dropdown1 from "./Dropdown1";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        E-OCEAN
        <i className="fab fa-firstdraft" />
      </Link>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Practice Section <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Courses <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown1 />}
        </li>
        <li className="nav-item">
          <Link
            to="/Button1"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            login
          </Link>
        </li>
        <li>
          <Link
            to="/Button1"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          ></Link>
        </li>
        <li>
          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </li>
      </ul>
      <Button1 />
      <Button />
    </nav>
  );
}

export default Navbar;
