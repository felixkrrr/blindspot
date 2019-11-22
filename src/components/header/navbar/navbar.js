import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">blindspot</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#Create-Account">Create account</Nav.Link>
          <Nav.Link href="#Log-In">Log in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
