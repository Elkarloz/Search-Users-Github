import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            Copyright © 2022 Search Users Github
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
