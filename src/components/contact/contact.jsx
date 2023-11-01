import React from "react";
import { FormComponent } from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./contact.scss";

export const ContactPage = () => {
  const emailAddress = "dspr1015@gmail.com";

  return (
    <div className="contact-container">
      <h1 className="underline-text">Contact Me</h1>
      <div className="contact-content-container">
        <div className="information-container">
          <h2 className="my-info-header">My Information</h2>
          <div className="info-items-container-format">
            <div className="info-items-container">
              <div className="info-item">
                <Link
                  to="https://www.linkedin.com/in/danielsprouls/"
                  target="blank_"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa-icon fa-linkedin"
                  />
                </Link>

                <a
                  href="https://www.linkedin.com/in/danielsprouls/"
                  target="blank_"
                >
                  Dan's LinkedIn Profile
                </a>
              </div>
              <div className="info-item">
                <Link to="https://github.com/Dansprouls" target="blank_">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="fa-icon fa-github"
                  />
                </Link>
                <a href="https://github.com/Dansprouls" target="blank_">
                  Dan's GitHub
                </a>
              </div>

              <div className="info-item">
                <Link to={`mailto:${emailAddress}`}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="fa-icon fa-email"
                  />
                </Link>
                <a href={`mailto:${emailAddress}`}>Send me an email</a>
              </div>
              <div className="info-item">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="fa-icon fa-location"
                />
                <p>Belmar, NJ 07719</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};
