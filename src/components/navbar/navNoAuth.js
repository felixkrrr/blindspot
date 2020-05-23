import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../../store/const/routes";

const NavNoAuth = props => {
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
        <Nav className="mr-auto">
          <NavLink exact to={ROUTES.LANDING} className="nav-link">
            Home
          </NavLink>

          <NavLink to={ROUTES.ABOUT} className="nav-link">
            About
          </NavLink>
        </Nav>
        <Nav>
          <NavLink to={ROUTES.SIGN_UP} className="nav-link">
            Create account
          </NavLink>
          <NavLink to={ROUTES.SIGN_IN} className="nav-link">
            Log in
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavNoAuth;
