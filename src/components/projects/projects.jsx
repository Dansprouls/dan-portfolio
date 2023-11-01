import React from "react";
import { ProjectFormat } from "../project-format/project-format";

import myFlixPic from "../../assets/myFlix-screenshot.png";
import RoundUp from "../../assets/RoundUp-screenshot.png";
import Pokedex from "../../assets/Pokedex-screenshot.png";
import DanPortfolio from "../../assets/DanPortfolio-screenshot.png";

import "./projects.scss";

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      image: myFlixPic,
      title: "myFlix - Star Wars",
      description:
        "Full-Stack project - Client-side React application that shows Star Wars movies for all users that have logged into the app. The client-side communicates with a REST API and the server-side database created with MongoDB which stores the user info, such as username, favorite movies, etc...",
      techStack:
        "React, JavaScript, Node.js, Express, MongoDB, Mongoose, JSON Web Tokens, React Bootstrap",
      githubLink: "https://github.com/Dansprouls/myFlix-client",
      websiteLink: "https://myflix-star-wars-movie-app.netlify.app/login",
    },
    {
      id: 2,
      image: RoundUp,
      title: "RoundUp - Meet App",
      description:
        "RoundUp is a serverless, progressive web application (PWA), with React that uses a test-driven development (TDD) approach to writing code. RoundUp uses the Google Calendar API to fetch various tech events around the globe. The app allows the user to filter on a city, select the number of events they would like to see, see details of an event, access events while offline, and even includes data visualizations by way of scatter/pie charts of event details.",
      techStack:
        "React, JavaScript, React Testing Library, Jest, Cucumber, OAuth2, AWS Lambda, Recharts",
      githubLink: "https://github.com/Dansprouls/meet",
      websiteLink: "https://dansprouls.github.io/meet/",
    },
    {
      id: 3,
      image: Pokedex,
      title: "Pokedex App",
      description:
        "The Pokedex app is a vanilla Javascript application that fetches data from an external Pokemon API and allows the user to view and search for Pokemon. Once a Pokemon is selected, a modal will pop up with details about the respective Pokemon.",
      techStack: "JavaScript, HTML5, CSS3, External API (Pokemon)",
      githubLink: "https://github.com/Dansprouls/pokedex-app",
      websiteLink: "https://dansprouls.github.io/pokedex-app/",
    },
    {
      id: 4,
      image: DanPortfolio,
      title: "Portfolio Website",
      description:
        "I decided to create my own portfolio from scratching using React to showcase and build upon my React skills, instead of using templates or a CMS. My portfolio website is a responsive application that contains information such as my contact information and information about me. Most importantly, it contains links to working websites and Github repos for projects that I have previously created. The goal of this project is to present my projects and skills to potential employers and fellow developers in a visually appealing and responsive UI. I plan on adding in backend and database features for form submission on the Contact page.",
      techStack: "HTML, SCSS, JavaScript, React",
      githubLink: "https://github.com/Dansprouls/dan-portfolio",
      websiteLink: "",
    },
  ];

  return (
    <div className="project-container">
      <h1 className="underline-text">My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectFormat key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
