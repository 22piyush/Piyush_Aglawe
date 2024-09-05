import React from "react";
import "./Navbar.css";
import piyushImg from "../Navbar/piyush phoooo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={piyushImg} alt="Piyush Aglawe" className="myImg" />
          <h3 className="headings">PIYUSH AGLAWE</h3>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
