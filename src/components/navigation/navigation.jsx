import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import "./navigation.scss";
import PixelPic from "../../assets/pixel-picture.jpeg";

export const NavigationBar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="togglebtn">
        <Link to="/">
          <img className="logo-pic-sm-screen" src={PixelPic} alt="logo" />
        </Link>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="nav-links-container">
        <span className="logo">
          <Link to="/">
            <img className="logo-pic" src={PixelPic} alt="logo" />
          </Link>
          <Link to="/">
            <p>Dan Sprouls</p>
          </Link>
        </span>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};
