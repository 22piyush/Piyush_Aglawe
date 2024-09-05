import React from "react";
import "./Home.css";
import perImg from "./personImage.avif";

function Home() {
  return (
    <div className="heading-container">
      <div className="my-info">
        <h1>HEY, I'M PIYUSH AGLAWE</h1>
        <p>
          A Full Stack Developer Passionate About Coding. Always ready to try
          Hands-on New and Emerging Technologies.
        </p>
      </div>
      <div className="person-image">
        <img src={perImg} alt="person" className="person-image" />
      </div>
    </div>
  );
}

export default Home;
