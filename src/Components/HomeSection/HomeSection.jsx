import React from "react";
import "./HomeSection.css";

export default function HomeSection() {
  return (
    <div>
      {/* Main Body Content */}
      <article className="titleContainer">
        <span>
        <a href="#home">
          <img
            className="navbar-logo"
            src="./images/Web-Dev-Logo.svg"
            alt="DA-web-dev logo"
          />
          <h2>
          Dev Designs
        </h2>
        </a>
        <h3 className="subTitle">
          Creativity Is Limited Only If You Want It To Be!
        </h3></span>
      </article>
    </div>
  );
}
