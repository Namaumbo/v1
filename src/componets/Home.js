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
