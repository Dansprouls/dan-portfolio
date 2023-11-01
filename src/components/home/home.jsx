import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./home.scss";

export const HomePage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="main-hero">
          <h1 className="underline-text">
            Hi! I'm <span className="dan-sprouls">Dan Sprouls</span> - Welcome
            to my Porfolio!
          </h1>
          <FontAwesomeIcon icon={faCode} className="fa-icon code-icon" />
          <h2>
            I am a Full-Stack Web Developer with experience in both Frontend and
            Backend technologies. I enjoy building interactive websites and
            applications that have a user-centric approach. <br />
            <br />
            <span className="accent-style">What can I build for you?</span>
          </h2>
          <div className="cta-container">
            <div className="about-cta">
              <Link to="/about">
                <p>About the Developer</p>
              </Link>
              <Link to="/about">
                <FontAwesomeIcon icon={faUser} className="fa-icon" />
              </Link>
            </div>
            <div className="my-work-cta">
              <Link to="/projects">
                <p>Check out my work</p>
              </Link>
              <Link to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
