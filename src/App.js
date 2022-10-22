import "./App.css";
import Home from "./componets/Home";

import AboutMe from "./componets/AboutMe";
import Experience from "./componets/Experience";
import TechnologyStack from "./componets/TechnologyStack";
import Projects from "./componets/Projects";
import WhatsNext from "./componets/WhatsNext";
import Contact from "./componets/Contact";
import { useRef } from "react";


function App() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);
  const technologyStack = useRef(null);
  const experience = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
     <div className="hero" >
        
        <ul>
          <li onClick={() => scrollToSection(home)} className="link">
            Home
          </li>
          <li onClick={() => scrollToSection(about)} className="link">
            About me
          </li>
          <li onClick={() => scrollToSection(experience)} className="link">
            Experience
          </li>
          <li
            onClick={() => scrollToSection(technologyStack)}
            className="link"
          >
            TechnologyStack
          </li>
          <li onClick={() => scrollToSection(projects)} className="link">
            projects
          </li>
        </ul>
      </div>

      <div className="App" >
     
        <header className="App-header">
      <br />
      <br />
      <br />
      <br />

          <div ref={home} className="home">
            <Home />
          </div>
          <div ref={about} className="about">
            <div style={{ marginLeft: "19.4em" }}>
              <AboutMe />
            </div>
          </div>
          <div ref={experience} className="experience">
            <div style={{ marginLeft: "35em" }}>
              <Experience />
            </div>
          </div>

          <div ref={technologyStack} className="techstack">
            <br />
            <br />
            <div>
              <TechnologyStack />
            </div>
            <br />
          </div>
          <div ref={projects} className="projects">
            <div>
              <Projects />
            </div>
          </div>
          <div ref={contact} className="contact">
            <div style={{ marginLeft: "15em" }}>
              <WhatsNext />
            </div>
            <div style={{ marginLeft: "15em" }}>
              <Contact />
            </div>
          </div>
        </header>
      </div>

      <footer
        style={{
          marginLeft: "45em",
          fontFamily: "monospace",
          color: "#53d3b9",
          fontSize: "12px",
        }}
      >
        Inspired by Chiang developed by Daelo
      </footer>
    </>
  );
}

export default App;
