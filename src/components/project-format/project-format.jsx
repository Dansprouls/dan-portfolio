import React from "react";

import "./project-format.scss";

export const ProjectFormat = ({ project }) => {
  const { id, image, title, description, techStack, githubLink, websiteLink } =
    project;

  return (
    <>
      <div className="project-item" key={id}>
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-details">
          <h2>{title}</h2>
          <p>
            <strong>Project Description: </strong>
            {description}
          </p>
          <p>
            <strong>Tech Stack: </strong> {techStack}
          </p>
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              View GitHub Repository
            </a>
            {websiteLink !== "" ? (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                View Deployed Project
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
