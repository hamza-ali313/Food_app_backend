import React, { Component, useState } from "react";
import ReactDOM, { render } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
// import logo from "../images/headerLogo.png";
import '../index.css'
function Header() {
  return (
    <div className="main-header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact="true" as={Link} to={"/"}>
                Home
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
                resturant menu
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
                book a table
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
                About Us
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
                events
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
                Gallery
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
                contact
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
              <FontAwesomeIcon icon={solid('user')} />
              </NavLink>
              <NavLink exact="true" as={Link} to={"/Aboutus"}>
              <FontAwesomeIcon icon={solid('cart-shopping')} />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
