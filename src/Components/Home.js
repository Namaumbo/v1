<<<<<<< HEAD
import React from "react";
import { Button } from "react-bootstrap";
import programmer from "../Asserts/use1.png";
import "./home.css"

export default function Home() {
  return (
    <>
      <div className="home">
        <div>
          <h1
            style={{
           
              color: "#53d3b9",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          >
            <span style={{ fontSize: "100px" }}>Hi,</span>{" "}
            <span style={{ fontWeight: "lighter", fontSize: "25px" }}>
              my name is
            </span>
          </h1>
          <h1
            style={{
              color: "#8892b0",
              fontSize: "120px",
              marginTop: "-40px",
              fontWeight: "bolder",
              marginLeft: "-6px",
              fontFamily: "sans-serif",
              letterSpacing: "10px",
            }}
          >
            Daelo{" "}
          </h1>
          <h1
            style={{ color: "#ccd6f6", fontSize: "70px", marginTop: "-0.4em" }}
          >
            I build things for the world.
          </h1>
          <br />
          <Button variant="outline-info" style={{ padding: "1em" }}  >
            Contact me!
          </Button>{" "}
          <Button variant="outline-info" style={{ padding: "1em" }} >
            Check my projects
          </Button>{" "}
        </div>
        <div>
          {" "}
          <img src={programmer} alt="illustrator" className="illustrator"></img>
        </div>
      </div>
      <br />
    </>
  );
}
=======
import React from "react";
import { Button } from "react-bootstrap";
// import programmer from "../Asserts/use1.png";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e2f70] to-[#0a192f] text-white flex flex-col items-center justify-center w-full">
        <nav className="w-full flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            {/* <img src="https://placehold.co/50x50" alt="Profile Picture" className="rounded-full w-12 h-12"> */}
            <div>
              <h1 className="text-lg font-bold ">Daelo Namaumbo</h1>
              <p className="text-sm text-green-400">Available for work</p>
            </div>
          </div>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-300 text-decoration-none"
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-yellow-300 text-decoration-none"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-300 text-decoration-none"
              >
                PROJECTS
              </a>
            </li>
          </ul>
          <Button className="bg-yellow-400 text-black px-4 py-2 rounded-full">
            Get in touch
          </Button>
        </nav>
        <div className="flex flex-col items-center mt-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            I'm{" "}
            <span className="text-yellow-300 text-6xl font-[900] ">
              Daelo Namaumbo
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mt-4">
            <span className="border p-3 rounded-md mr-2">Full Stack </span>
            Developer
          </h3>
          {/* <img src="https://placehold.co/200x300" alt="Developer Image" className="mt-8 w-48 h-64 rounded-lg"> */}
          <Button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full">
            MY PROJECTS
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 space-y-8 md:space-y-0 md:space-x-20">
          <div
            className="bg-blue-800 p-4 rounded-lg shadow-lg w-72"
            id="first-box"
          >
            <h4 className="text-lg font-bold">
              Client Review From Around the Global{" "}
              <span className="bg-purple-600 px-2 py-1 rounded-full text-sm">
                5.0
              </span>
            </h4>
            <p className="mt-2 text-sm">
              Outstanding Web Developer. Exceeded All Expectations. Highly
              Recommended Without Hesitation.
            </p>
          </div>

          <img src="me.png" alt="dp" className="image" />

          <div
            className="bg-blue-800 p-4 rounded-lg shadow-lg w-72"
            id="second-box"
          >
            <h4 className="text-lg font-bold">MY EXPERTISE</h4>
            <div className="mt-4">
              <p className="text-sm">BACKEND</p>
              <div className="w-[90%] bg-zinc-700 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-400 h-2.5 rounded-full"></div>
              </div>
              <p className="text-sm">CMS</p>
              <div className="w-[30%] bg-zinc-700 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-400 h-2.5 rounded-full"></div>
              </div>
              <p className="text-sm">FRONTEND</p>
              <div className="w-full bg-zinc-700 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-400 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div classNameName="home">
        <div>
          <h1
            style={{
           
              color: "#53d3b9",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          >
            <span style={{ fontSize: "100px" }}>Hi,</span>{" "}
            <span style={{ fontWeight: "lighter", fontSize: "25px" }}>
              my name is
            </span>
          </h1>
          <h1
            style={{
              color: "#8892b0",
              fontSize: "120px",
              marginTop: "-40px",
              fontWeight: "bolder",
              marginLeft: "-6px",
              fontFamily: "sans-serif",
              letterSpacing: "10px",
            }}
          >
            Daelo{" "}
          </h1>
          <h1
            style={{ color: "#ccd6f6", fontSize: "70px", marginTop: "-0.4em" }}
          >
            I build things for the world.
          </h1>
          <br />
          <Button variant="outline-info" style={{ padding: "1em" }}  >
            Contact me!
          </Button>{" "}
          <Button variant="outline-info" style={{ padding: "1em" }} >
            Check my projects
          </Button>{" "}
        </div>
        <div>
          {" "}
          <img src={programmer} alt="illustrator" classNameName="illustrator"></img>
        </div>
      </div> */}
    </>
  );
}
>>>>>>> 4d798ac384e2d17b8338f8b9d583bffe465ff263
