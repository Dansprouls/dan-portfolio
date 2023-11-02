import React from "react";
import { LanguageFormat } from "../languages/languages";

import "./about-page.scss";

export const AboutPage = () => {
  const languages = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "NPM",
    "Express",
    "MongoDB",
    "SQL",
    "Jest-Cucumber",
    "API",
    "Angluar",
  ];

  return (
    <div className="about-container">
      <h1 className="underline-text">About Me</h1>

      <div className="about-content">
        <p>
          I'm a Full Stack Web Developer with a passion for transforming ideas
          into interactive digital experiences. My journey in the world of
          coding began with a fascination for creativity and technology, and it
          has evolved into a proficiency in both front-end and back-end
          development. My focus on user-centric design and robust functionality
          ensures that every project I take on leaves a lasting impression.
        </p>
        <div className="skills-container">
          <h2>Languages and Technologies</h2>

          <div className="language-container">
            {languages.map((language) => (
              <LanguageFormat key={language} language={language} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
