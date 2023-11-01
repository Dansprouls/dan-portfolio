import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./components/about/about";
import { HomePage } from "./components/home/home";
import { NavigationBar } from "./components/navigation/navigation";
import { ProjectsPage } from "./components/projects/projects";
import { ContactPage } from "./components/contact/contact";

function App() {
  return (
    <>
      <script
        src="https://kit.fontawesome.com/bab12ba52e.js"
        crossOrigin="anonymous"
      ></script>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
<BrowserRouter>
        <NavigationBar />
        <Home />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </BrowserRouter>
*/
