import React from "react";
// import { Button } from "react-bootstrap";
// import ShinyBtnComponent from "../Components/ShinyBtnComponent";
// import StarBorder from "../Components/starBorderComponent/StarBorderComponent";
import Squares from "../Components/SquaresComponent";
// import programmer from "../Asserts/use1.png";
// import "./home.css";

export default function Home() {
  return (
    <>
    <div className="mt-16">
    <Squares
        speed={0.05}
        size={50}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#4B3F2C"
        hoverFillColor="#fff"
      />
      </div>
     
      <h3 className="text-center text-5xl text-white mt-8">UNDER MAINTANCE</h3>
      <p className="text-center text-xl text-white mt-8">Please still more visit : https://github.com/Namaumbo</p>
      {/* <div className="min-h-screen bg-gradient-to-b from-[#0a0e2f70] to-[#0a192f] text-white flex flex-col items-center justify-center w-full">
        <nav className="w-full flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
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

          <button className=" border border[#b5b5b5a4] rounded-full p-3 hover:scale-105 ease-in-out duration-300">
            <ShinyBtnComponent
              text="Get In Touch"
              disabled={false}
              speed={3}
              className="text-xl"
            />
          </button>
        </nav>
        <div className="flex flex-col items-center mt-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            I'm
            <span className="text-yellow-300 text-6xl font-[900] ml-3">
              Daelo Namaumbo
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl ">
            <span className="border p-3 rounded-md mr-2">Full Stack </span>
            Developer
          </h3>
        </div>
        <StarBorder as="button" className="custom-class" color="red" speed="5s">
          Visit My Portfolio
        </StarBorder>
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
      </div> */}
    </>
  );
}
