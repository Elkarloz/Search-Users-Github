import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Navbar } from "react-bootstrap";

const myNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Search Users Github
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default myNavbar;
