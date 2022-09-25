import React from "react";

import { Grid, Header, Image, Progress } from "semantic-ui-react";
import js from "../Asserts/js.png";
import css from "../Asserts/css.png";
import node from "../Asserts/node.png";
import spring from "../Asserts/spring.png";
import html from "../Asserts/html.png";
import git from "../Asserts/git.png";
import react from "../Asserts/react.png";
import laravel from "../Asserts/laravel.png";
import python from "../Asserts/python.png";

export default function TechnologyStack() {
  return (
    <>
      <div style={{ marginRight: "30.5em" }}>
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
          <span style={{ paddingLeft: "2em" }}>
            <span style={{ color: "#53d3b9", fontFamily: "monospace" }}>
              3.{" "}
            </span>
            Technology Stack
          </span>{" "}
        </h1>
        <br />
      </div>

      <Header    style={{ marginLeft: "25em" ,color:"#53d3b9",fontFamily:"monospace"}}>
        {" "}
        Technology stack & progress
      </Header>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Grid>
          <Grid.Row columns={9}>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                Java 
              </Header>

              <Image
                src={js}
                style={{
                  width: "50px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="yellow" percent={90} size="tiny" />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                HTML
              </Header>
              <Image
                src={html}
                style={{
                  width: "50px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="red" percent={80} size="tiny" />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                CSS
              </Header>
              <Image
                src={css}
                style={{
                  width: "50px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="blue" percent={80} size="tiny" />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                node 
              </Header>
              <Image
                src={node}
                style={{
                  width: "55px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="green" percent={80} size="tiny" />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                spring 
              </Header>
              <Image
                src={spring}
                style={{
                  width: "55px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress
                color="green"
                percent={50}
                size="tiny"
                style={{ marginTop: "20px" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                react 
              </Header>
              <Image
                src={react}
                style={{
                  width: "60px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress
                color="blue"
                percent={80}
                size="tiny"
                style={{ marginTop: "20px" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                python
              </Header>
              <Image
                src={python}
                style={{
                  width: "100px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="yellow" percent={50} size="tiny" />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                git
              </Header>
              <Image
                src={git}
                style={{
                  width: "90px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="red" percent={60} size="tiny" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column>
              <Header
                as="h3"
                style={{
                  color: "#53d3b9",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontFamily: "monospace",
                }}
              >
                laravel
              </Header>
              <Image
                src={laravel}
                style={{
                  width: "100px",
                  border: "1.5 solid white",
                  borderRadius: "10px",
                }}
              />
              <p></p>
              <Progress color="red" percent={60} size="tiny" />
            </Grid.Column>
        </Grid>
      </div>
    </>
  );
}
