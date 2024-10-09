/* 
List of Todo:
Need to Add Drop Down Menu when Screen is small
*/

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/MT.png";

// function Navbar() {
//   return (
//     <nav id="navbar">
//       <div className="navbar-logo">
//         <a href="#">
//           <img src={logo}></img>
//         </a>
//       </div>

//       <ul className={`navbar-menu`}>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a rel="noopener" href="#Latest-Projects">
//             Projects
//           </a>
//         </li>
//         {/* <li>
//           <a href="#Experience">Experience</a>
//         </li> */}
//         <li>
//           <a href="#Contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar">
      <div
        className={`off-screen-menu ${isOpen ? "off-screen-menu-open" : ""}`}
      >
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <a className="sidebar-a" href="#">
              Home
            </a>
          </li>
          <li className="sidebar-link">
            <a className="sidebar-a" href="#Latest-Projects">
              Projects
            </a>
          </li>
          <li className="sidebar-link">
            <a className="sidebar-a" href="#Experience">
              Experience
            </a>
          </li>
          <li className="sidebar-link">
            <a className="sidebar-a" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a className="navbar-a" href="#">
            <img className="navbar-logo" src={logo}></img>
          </a>
        </li>
        <li className="navbar-link">
          <a className="navbar-a" href="#">
            Home
          </a>
        </li>
        <li className="navbar-link">
          <a className="navbar-a" href="#Latest-Projects">
            Projects
          </a>
        </li>
        <li className="navbar-link">
          <a className="navbar-a" href="#Experience">
            Experience
          </a>
        </li>
        <li className="navbar-link">
          <a className="navbar-a" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={toggleMenu}
        className={`hamburger-menu ${isOpen ? "hamburger-menu-open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
