import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/MT.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={logo}></img>
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}></div>
      <ul className={`navbar-menu ${isOpen ? "show" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
