/* 
List of Todo:
Need to Add Drop Down Menu when Screen is small
*/

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/MT.png";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={logo}></img>
        </a>
      </div>

      <ul className={`navbar-menu`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a rel="noopener" href="#Latest-Projects">
            Projects
          </a>
        </li>
        {/* <li>
          <a href="#Experience">Experience</a>
        </li> */}
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
