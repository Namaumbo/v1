import React from "react";
import { Tab } from "semantic-ui-react";
import "./Experience.css";

export default function Experience() {
  const panes = [
    {
      menuItem: "Inscription Malawi",
      render: () => (
        <Tab.Pane style={{ backgroundColor: "#0a192f", border: "none" }}>
          <ul>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              Participated in seminars and additional training to expand
              knowledge and skills.
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              Worked well with different people to address challenges and solve
              problems collaboratively
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              Required minimal oversight to complete job tasks.
            </li>

            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              Finished tasks and job duties, adhering to deadlines to avoid
              delays
            </li>
          </ul>
        </Tab.Pane>
      ),
    },

    {
      menuItem: "Exception Group",
      render: () => (
        <Tab.Pane style={{ backgroundColor: "#0a192f", border: "none" }}>
          <ul>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              I developed excepcion music Group where people can download or
              stream tracks.
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              I was a solo developer and implemented the design wanted to leave
              on the internet.
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              I was a solo developer and implemented the design wanted to leave
              on the internet.
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              Delivered something unique to the clients.
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Zomba Baptist Church",
      render: () => (
        <Tab.Pane style={{ backgroundColor: "#0a192f", border: "none" }}>
          <ul>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              I was part of the development team of 3 people. I was tasked to
              design and develop an API.
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              Worked effinciently with 2 diverse programmers and deduced the
              problems to be captured.
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              I patched some of the front end work to have a great UX
            </li>
            <li style={{ color: "#8892b0", fontSize: "14px" }}>
              " Interested? I have a number of projects too!" .
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <div style={{ width: "600px" }}>
        <br />
        <div style={{ marginRight: "3em" }}>
        <h1
          className="title"
          style={{
            fontSize: "25px",
            color: "#ccd6f6",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
        }}
        >
          <br />
          <br />
          <span >
            <span style={{ color: "#53d3b9", fontFamily: "monospace" }}>
              2.{" "}
            </span>
            Experience
          </span>{" "}
        </h1>
      </div>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: true }}
          panes={panes}
        />
      </div>
    </>
  );
}
