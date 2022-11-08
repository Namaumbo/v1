import "./App.css";
import Home from "./componets/Home";
import AboutMe from "./componets/AboutMe";
import Experience from "./componets/Experience";
import TechnologyStack from "./componets/TechnologyStack";
import Projects from "./componets/Projects";
import WhatsNext from "./componets/WhatsNext";
import Contact from "./componets/Contact";
import { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
     {/* <div className="hero" >
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
      </div> */}
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection(home)}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(about)}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(experience)}>Experience</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(technologyStack)}>TechnologyStack</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(projects)}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


{/* <Button >well</Button> */}
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
            <div className="aboutme">
              <AboutMe />
            </div>
          </div>
          <div ref={experience} className="experience">
            <div className="experience">
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

    
     
    </>
  );
}

export default App;
