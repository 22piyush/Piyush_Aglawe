import React from "react";
import "./Navbar.css";
import piyushImg from "../Navbar/piyush phoooo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow">
    <div className="container-fluid navbar-container">
    <div className="navbar-logo">
           <img src={piyushImg} alt="Piyush Aglawe" className="myImg" />
           <h3 className="headings">PIYUSH AGLAWE</h3>
        </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="/" className="nav-link ms-md-2 ms-md-0 " aria-current="page">Home</a>
          </li>
        
          <li className="nav-item">
            <a href="/about" className="nav-link ms-md-2 ms-md-0 ">About us</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link ms-md-2 ms-md-0 ">Contact</a>
          </li>
          <li className="nav-item">
            <a href="/order-now" className="nav-link ms-md-2 ms-md-0 ">Order Now</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    // <div className="navbar">
    //   <div className="navbar-container">
    //     <div className="navbar-logo">
    //       <img src={piyushImg} alt="Piyush Aglawe" className="myImg" />
    //       <h3 className="headings">PIYUSH AGLAWE</h3>
    //     </div>
    //     <div className="navbar-links">
    //       <ul>
    //         <li>
    //           <a href="#">HOME</a>
    //         </li>
    //         <li>
    //           <a href="#">ABOUT</a>
    //         </li>
    //         <li>
    //           <a href="#">PROJECTS</a>
    //         </li>
    //         <li>
    //           <a href="#">CONTACT</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
