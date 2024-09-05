import React from "react";
import "./Navbar.css";
import piyushImg from "../Navbar/piyush phoooo.jpg";
import { Link } from "react-router-dom";

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
              <Link to="#">HOME</Link>
            </li>
            <li>
              <Link to="#">ABOUT</Link>
            </li>
            <li>
              <Link to="#">PROJECTS</Link>
            </li>
            <li>
              <Link to="#">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
