import React from "react";
import { Button } from "react-bootstrap";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <>
      <div style={{ marginLeft: "5em" }}>
        <h1
          style={{
            transitionDelay: "300ms",
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
        <h1 style={{ color: "#ccd6f6", fontSize: "70px", marginTop: "-0.4em" }}>
          I build things for the world.
        </h1>
        <br />
        <Button variant="outline-info" style={{ padding: "1em" }}>
          Contact me!
        </Button>{" "}
        <Button variant="outline-info" style={{ padding: "1em" }}>
          Check my projects
        </Button>{" "}
      </div>
      <br />
      <div style={{ marginRight: "15em" }}>
        <h1
          className="title"
          style={{
            fontSize: "25px",
            color: "#ccd6f6",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
            marginTop: "7em",
          }}
        >
          <br />
          <span style={{ paddingLeft: "2em" }}>
            <span style={{ color: "#53d3b9", fontFamily: "monospace" }}>
              1.{" "}
            </span>
            About Me
          </span>{" "}
        </h1>
        
      </div>
      
    </>
  );
}
