import "./App.css";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import AboutMe from "./componets/AboutMe";
import Experience from "./componets/Experience";
import TechnologyStack from "./componets/TechnologyStack";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <br />
          <NavBar />
          <br />
          <br />
          <Home />
        </header>
      </div>
      <div style={{ marginLeft: "19.4em" }}>
        <AboutMe />
      </div>
      <div style={{ marginLeft: "35em" }}>
        <Experience />
      </div>
      <br />
      <div style={{ marginLeft: "5em" }}>
        <TechnologyStack />
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
