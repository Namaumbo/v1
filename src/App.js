import logo from "./logo.svg";
import "./App.css";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import AboutMe from "./componets/AboutMe";

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
      <div style={{marginLeft:"19.4em"}}>
      <AboutMe />
      </div>
      
    </>
  );
}

export default App;
