import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Button } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <Header as="h3" style={{ color: "#ccd6f6", fontSize: "50px" }}>
        {" "}
        Contact me!{" "}
      </Header>
      <a
        href="https://github.com/spikkernamaumbo" target="_blank" rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Icon name="github" link size="big" style={{ color: "white" }}></Icon>
      </a>
      <a
        href="https://www.linkedin.com/in/daeloh-namaumbo-b66a6b198/" target="_blank" rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Icon name="linkedin" link size="big" style={{ color: "white" }}></Icon>
      </a>
      <a
        href="https://web.facebook.com/dailo.namaumbo" target="_blank" rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Icon name="facebook" link size="big" style={{ color: "white" }}></Icon>
      </a>
      <a
        href="https://wa.me/265882287244" target="_blank" rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Icon name="whatsapp" link size="big" style={{ color: "white" }}></Icon>
      </a>
      <a
        href="https://instagram.com" target="_blank" rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Icon
          name="instagram"
          link
          size="big"
          style={{ color: "white" }}
        ></Icon>
      </a>
      <a
        href="mailto: spikkernamaumbo@gmail.com" target="_blank" rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Icon name="mail" link size="big" style={{ color: "white" }}></Icon>
      </a>
      <br />
      <br />

      <a href="mailto: spikkernamaumbo@gmail.com">
        {" "}
        <Button variant="outline-info">Say Hallo!</Button>
      </a>
    </>
  );
}
