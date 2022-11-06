import React, { useEffect, useState } from "react";

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
import java from "../Asserts/java.png";
import "./technology.css";

export default function TechnologyStack() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 960);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 960);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <div>
        {isDesktop ? (
          <div className="technologstack">
            <div>
              <h1 className="title">
                <br />
                <span>
                  <span className="titleNumber">3.</span>
                  Technology Stack
                </span>
              </h1>
              <br />
            </div>

            <h3 className="techHead">Technology stack & progress</h3>
            <br />
            <div className="langs">
              <Grid>
                <Grid.Row columns={10}>
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
                      Js
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
                        width: "60px",
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
                        width: "60px",
                        border: "1.5 solid white",
                        borderRadius: "10px",
                      }}
                    />
                    <p></p>
                    <Progress color="red" percent={60} size="tiny" />
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
                      laravel
                    </Header>
                    <Image
                      src={laravel}
                      style={{
                        width: "50px",
                        border: "1.5 solid white",
                        borderRadius: "10px",
                      }}
                    />
                    <p></p>
                    <Progress color="red" percent={60} size="tiny" />
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
                      java
                    </Header>
                    <Image
                      src={java}
                      style={{
                        width: "80px",
                        border: "1.5 solid white",
                        borderRadius: "10px",
                      }}
                    />
                    <p></p>
                    <Progress color="blue" percent={60} size="tiny" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        ) : (
          <div className="smallscreenTech">
             <h1 className="title">
                <br />
            <span>
             <span className="titleNumber">3.</span>
                  Technology Stack
                </span>
                </h1>
            <h4 className="stack">Javascript</h4>
            <Progress percent={89} color="yellow" size="tiny"/>
            <h4 className="stack">HTML</h4>
            <Progress percent={100} color="red" size="tiny" />
            <h4 className="stack">CSS</h4>
            <Progress percent={90} color="blue" size="tiny"/>
            <h4 className="stack">React js</h4>
            <Progress percent={89} color="green"  size="tiny"/>
            <h4 className="stack">Laravel</h4>
            <Progress percent={80} color="red"  size="tiny"/>
            <h4 className="stack">Python</h4>
            <Progress percent={50} color="yellow"   size="tiny"/>
            <h4 className="stack">Java</h4>
            <Progress percent={70} color="red"   size="tiny"/>
            <h4 className="stack">Node js</h4>
            <Progress percent={80} color="blue" size="tiny" />
            <h4 className="stack">Spring Boot</h4>
            <Progress percent={60} color="green"  size="tiny"/>
            <h4 className="stack">git</h4>
            <Progress percent={70} color="red"   size="tiny"/>
           
          </div>
        )}
      </div>
    </>
  );
}
