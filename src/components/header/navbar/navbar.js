import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoggedOutLinks from "./loggedOutLinks";
import LoggedInLinks from "./loggedInLinks";

import { connect } from "react-redux";

const NavBar = props => {
  const { auth } = props;
  //additional navigation that shows "Log In" or "Log Out" depending on login status
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;

  //base Navigation that shows Home when logged out and Dashboard when logged in
  const base = (
    <Nav className="mr-auto">
      {!auth.uid && (
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
      )}
      {auth.uid && (
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      )}
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </Nav>
  );

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="">blindspot</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {auth.isLoaded && base}
        {auth.isLoaded && links}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(NavBar);
