import React from "react";
import { Grid, Header, Icon, Image } from "semantic-ui-react";
import excepcion from "../Asserts/excepcion2.png";
import phone from "../Asserts/phone.png";
import todo from "../Asserts/todoApp.png";
import "./Project.css";

export default function Projects() {
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
          <span
            style={{
              paddingLeft: "2em",
              fontFamily: "sans-serif",
            }}
          >
            <span style={{ color: "#53d3b9", fontFamily: "monospace" }}>
              4.{" "}
            </span>
            What I've Built
          </span>{" "}
        </h1>
        <br />
      </div>
      <br />
      <br />
      <>
        <h3
          style={{
            marginLeft: "4.6em",
            color: "#ccd6f6",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          Excepcion Record
        </h3>
        <div style={{ display: "block", marginLeft: "28em" }}>
          <div
            style={{
              width: "500px",
              marginLeft: "-20em",
              marginBottom: "-13em",
              border: ".5px solid #0a192f",
              color: "#8892b0",
              borderRadius: "5px",
              boxShadow: "-1px 3px 35px .5px black",
            }}
          >
            <div
              style={{
                backgroundColor: "#0a192f",
                padding: "1em",
                justify: "left",
              }}
            >
              A web app for downloading and streaming songs and tracks. You can
              Follow an artists, donwloaded and streamed statistics, and
              detailed audio information about each track.Only registered Admin
              can upload songs and more
            </div>
          </div>

          <Image
            src={excepcion}
            style={{
              width: "650px",
              marginTop: "-9em",
              zIndex: -1,
              marginLeft: "8em",
              opacity: ".4",
            }}
          />
        </div>

        <div style={{ marginTop: "-7em", marginLeft: "10em" }}>
          <Header as="h4" style={{ color: "#53d3b9", fontFamily: "monospace" }}>
            Reactjs Node js Express postgresql firebase
          </Header>
          <br />
          <a
            href="https://github.com/spikkernamaumbo/Exception"
            style={{ textDecoration: "none" }}
          >
            <Icon
              name="github"
              size="large"
              link
              style={{
                color: "white",
                marginRight: "1em",
                marginTop: "-2em  ",
              }}
            ></Icon>
          </a>

          <Icon
            name="external"
            size="large"
            link
            style={{ color: "white", marginTop: "-2em" }}
          ></Icon>
        </div>
      </>
      <br />
      <br />
      <br />
      <br />
      <br />
      <>
        <h3
          style={{
            marginLeft: "4.6em",
            color: "#ccd6f6",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          Gas booking application
        </h3>
        <div style={{ display: "block", marginLeft: "28em" }}>
          <div
            style={{
              width: "500px",
              marginLeft: "-20em",
              marginBottom: "-13em",
              border: ".5px solid #0a192f",
              color: "#8892b0",
              borderRadius: "5px",
              boxShadow: "-1px 3px 35px .5px black",
            }}
          >
            <div
              style={{
                backgroundColor: "#0a192f",
                padding: "1em",
                justify: "left",
              }}
            >
              A mobile application for booking and following orders of cooking
              gas. You can Follow, place, cancel gas orders and sending
              locational address to either be delivered at home. You can follow
              financial statements and done orders among others.
            </div>
          </div>

          <Image
            src={phone}
            style={{
              width: "650px",
              height: "350px",
              marginTop: "-9em",
              zIndex: -1,
              marginLeft: "8em",
              opacity: "0.2",
            }}
          />
        </div>

        <div style={{ marginTop: "-10em", marginLeft: "10em" }}>
          <Header as="h4" style={{ color: "#53d3b9", fontFamily: "monospace" }}>
            mock it
          </Header>
          <br />
          <a
            href="https://mockittapp.wondershare.com/app/35830a9402ce1b3ccf7d838b67cd70154111d150#screen=sl7k7iig3iqslxv"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Icon
              name="external"
              size="large"
              link
              style={{ color: "white", marginTop: "-2em" }}
            ></Icon>
          </a>
        </div>
      </>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <>
        <h3
          style={{
            marginLeft: "4.6em",
            color: "#ccd6f6",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          To do Application
        </h3>
        <div style={{ display: "block", marginLeft: "28em" }}>
          <div
            style={{
              width: "500px",
              marginLeft: "-20em",
              marginBottom: "-13em",
              border: ".5px solid #0a192f",
              color: "#8892b0",
              borderRadius: "5px",
              boxShadow: "-1px 3px 35px .5px black",
            }}
          >
            <div
              style={{
                backgroundColor: "#0a192f",
                padding: "1em",
                justify: "left",
              }}
            >
              This is the web application helping people to keep track of their
              duties to be completed as they also set their priorities.
            </div>
          </div>

          <Image
            src={todo}
            style={{
              width: "650px",
              height: "350px",
              marginTop: "-9em",
              zIndex: -1,
              marginLeft: "8em",
              opacity: "0.2",
            }}
          />
        </div>

        <div style={{ marginTop: "-10em", marginLeft: "10em" }}>
          <Header as="h4" style={{ color: "#53d3b9", fontFamily: "monospace" }}>
            Reactjs semantic ui postgresql
          </Header>
          <br />
          <a
            href="https://github.com/spikkernamaumbo/Todo_app.git"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Icon
              name="github"
              size="large"
              link
              style={{
                color: "white",
                marginRight: "1em",
                marginTop: "-2em  ",
              }}
            ></Icon>
          </a>

          <a
            href="https://complete-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Icon
              name="external"
              size="large"
              link
              style={{ color: "white", marginTop: "-2em" }}
            ></Icon>
          </a>
        </div>
      </>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <>
        <h3
          style={{
            marginLeft: "4.6em",
            color: "#ccd6f6",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          Zomba church managemnt sys
        </h3>
        <div style={{ display: "block", marginLeft: "28em" }}>
          <div
            style={{
              width: "500px",
              marginLeft: "-20em",
              marginBottom: "-13em",
              border: ".5px solid #0a192f",
              color: "#8892b0",
              borderRadius: "5px",
              boxShadow: "-1px 3px 35px .5px black",
            }}
          >
            <div
              style={{
                backgroundColor: "#0a192f",
                padding: "1em",
                justify: "left",
              }}
            >
              A web app for managing church members and the services rendered to
              them. You can Follow an announcements made on sundays, pay tithe
              and follow sermons verses among other activities. Only registered
              Admin or pastor can upload services to congregations.
            </div>
          </div>

          <Image
            src={excepcion}
            style={{
              width: "650px",
              marginTop: "-9em",
              zIndex: -1,
              marginLeft: "8em",
              opacity: "0.2",
            }}
          />
        </div>

        <div style={{ marginTop: "-7em", marginLeft: "10em" }}>
          <Header as="h4" style={{ color: "#53d3b9", fontFamily: "monospace" }}>
            Reactjs Laravel Bootstrap Mysql
          </Header>
          <br />
          <a
            href="https://github.com/spikkernamaumbo/ZombaBaptistApi"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Icon
              name="github"
              size="large"
              link
              style={{
                color: "white",
                marginRight: "1em",
                marginTop: "-2em  ",
              }}
            ></Icon>
          </a>

          <Icon
            name="external"
            size="large"
            link
            style={{ color: "white", marginTop: "-2em" }}
          ></Icon>
        </div>

        <br />
        <div style={{ marginRight: "13.5em" }}>
          <h1
            style={{
              fontSize: "25px",
              color: "#ccd6f6",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              marginLeft: "20em",
            }}
          >
            <br />
            {"<>"} Other projects! {"</>"}
          </h1>
          <br />
        </div>
        <Grid divided="vertically">
          <Grid.Row columns={3} style={{ display: "flex" }}>
            <Grid.Column>
              <div
                style={{
                  backgroundColor: "#0a192f",
                  border: "2px solid #0a192f",
                  boxShadow: "-1px 3px 35px .5px black",
                  padding: ".5em",
                  marginLeft: "4em",
                  color: "#8892b0",
                  borderRadius: "5px",
                }}
              >
                <Header
                  as="h3"
                  style={{
                    color: "#53d3b9",
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  <Icon name="folder" />
                  Voice-to-computer-command
                </Header>
                <a
                  href="https://github.com/spikkernamaumbo/voice-computerCommand"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Icon
                    name="github"
                    color="white"
                    link
                    size="large"
                    style={{ marginTop: "-1em" }}
                  />
                </a>

                <p>
                  This a desktop application for users to give commands to
                  computer to turn off,sleep and hibernate.Text to command is
                  sorely python and targeting linux operating systems for easy
                  service registration. Users speak out commands sentences and
                  the computer checks if the command exists, and later it is
                  excuted.
                </p>
                <Header
                  as="h4"
                  style={{ color: "#53d3b9", fontFamily: "monospace" }}
                >
                  Python
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  backgroundColor: "#0a192f",
                  border: "2px solid #0a192f",
                  boxShadow: "-1px 3px 35px .5px black",
                  padding: ".5em",
                  color: "#8892b0",
                  borderRadius: "5px",
                  width: "400px",
                }}
              >
                <Header
                  as="h3"
                  style={{
                    color: "#53d3b9",
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  <Icon name="folder" />
                  U-Notify
                </Header>
                <a
                  href="https://github.com/spikkernamaumbo/UNotify"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Icon
                    name="github"
                    color="white"
                    link
                    size="large"
                    style={{ marginTop: "-1em" }}
                  />
                </a>
                <p>
                  This a mobile application for students and teachers or
                  lecturers,it is an electronic notice body. It lets students
                  retrieve information posted, lecturers or teachers post
                  notifications on the notice board and students targeted,
                  retrieve the information.
                </p>
                <Header
                  as="h4"
                  style={{ color: "#53d3b9", fontFamily: "monospace" }}
                >
                  androidstudio java nodejs postgresql
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  backgroundColor: "#0a192f",
                  border: "2px solid #0a192f",
                  boxShadow: "-1px 3px 35px .5px black",
                  padding: ".5em",
                  color: "#8892b0",
                  borderRadius: "5px",
                  width: "400px",
                  marginLeft: "-2em",
                }}
              >
                <Header
                  as="h3"
                  style={{
                    color: "#53d3b9",
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  <Icon name="folder" />
                  Web server
                </Header>
                <a
                  href="https://github.com/spikkernamaumbo/web-server"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Icon
                    name="github"
                    color="white"
                    link
                    size="large"
                    style={{ marginTop: "-1em" }}
                  />
                </a>

                <p>
                  A web server Built in python. you can access the log files for
                  statistics information and enables log rotation. currently 2
                  websites are served upon the start of the server. It allows
                  you to search by name of the website than the ip address in
                  the process of virtual hosting.
                </p>
                <Header
                  as="h4"
                  style={{ color: "#53d3b9", fontFamily: "monospace" }}
                >
                  python
                </Header>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
      <br />
      <br />
    </>
  );
}
