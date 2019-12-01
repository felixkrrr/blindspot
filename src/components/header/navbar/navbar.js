import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoggedOutLinks from "./loggedOutLinks";
import LoggedInLinks from "./loggedInLinks";

import { connect } from "react-redux";

const NavBar = props => {
  const { auth } = props;
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="/">blindspot</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </Nav>

        {auth.isLoaded && links}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(NavBar);
