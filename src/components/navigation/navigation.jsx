import { Link } from "react-router-dom"; //use this to set up navigation
//import ReorderIcon from "@mui/icons-material/Reorder"; //cant figure out icon

import "./navigation.scss";
import PixelPic from "../../assets/pixel-picture.jpeg";

export const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="togglebtn">
        <button></button>
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

/*
Navbar using React bootstrap
<Navbar expand="lg" className="navbar-style">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Dan Sprouls
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="nav-container justify-content-end">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              My Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
*/
