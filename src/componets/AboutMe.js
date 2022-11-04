import React from "react";
import "./AboutMe.css";
import pic from "../Asserts/me.jpg";
import { Divider } from "semantic-ui-react";
export default function AboutMe() {
  return (
    <>
    <div className="about">

      <div >
        <br />
        <div className="divider">
        <Divider horizontal >
          <span
            style={{
              color: "#53d3b9",
              fontFamily: "monospace",
              fontSize: "25px",
              paddingRight:"20px"
            }}
          >
            1.
          </span>
          <span className="titles">About Me</span>
        </Divider>
        </div>
       
        {/* </span>{" "} */}
        {/* </h1> */}
        <br />
      </div>
      <div className="wrapper">
        <div className="details">
          <p className="paragraph">
            <span
              style={{
                color: "#53d3b9",
                fontFamily: "monospace",
                fontSize: "25px",
              }}
            >
              H
            </span>
            ello! My name is Daelo Namaumbo and I enjoy developing things easing{" "}
            <span
              style={{
                color: "#53d3b9",
                fontFamily: "monospace",
              }}
            >
              daily leaving
            </span>
            . My interest in development started back in 2016 when I decided to
            try editing Jerusalem Baptist website — turns out ads among other
            buttons together directed me to a number of possibilities. A button
            taught me a lot about HTML & CSS!
          </p>

          <p
            style={{
              textAlign: "justify",
              color: "#8892b0",
              fontWeight: "revert",
              fontSize: "17px",
            }}
          >
            Days and struggles passed which finaly got to University of Malawi
            also known as Chancellor College past days.I had to conceptualise
            everything a developer needs to know about software develoment. I
            have had privileges of being part of a few project to grasp what the
            industry is all about. My main focus now is developing applications
            on web, mobile and desktop applications that would enhance lives
            better.
          </p>
          <p
            style={{
              textAlign: "justify",
              color: "#8892b0",
              fontWeight: "revert",
              fontSize: "17px",
            }}
          >
            Here are some of the technology stack I have been working with in
            the recent time.
          </p>
          <div className="listContainer">
            <div className="frontStack">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>Laravel</li>
                <li>React</li>
              </ul>
            </div>
            <div className="backendStack">
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>Springboot framework</li>
                <li>SQL</li>
                <li>Postgresql</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img
            src={pic}
            alt="dp"
            className="image"
            style={{
              width: "300px",
            }}
          />
        </div>
      </div>

      <br />
      </div>
    </>
  );
}
