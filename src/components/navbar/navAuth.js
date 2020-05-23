import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../../store/const/routes";
import { withFirebase } from "../Firebase";

const NavAuth = ({ firebase }) => {
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
          <NavLink to={ROUTES.DASHBOARD} className="nav-link">
            Dashboard
          </NavLink>

          <NavLink to={ROUTES.ABOUT} className="nav-link">
            About
          </NavLink>
        </Nav>
        <Nav>
          <Navbar.Text className="nav-text">{firebase.auth.email}</Navbar.Text>

          <NavLink
            exact
            to={ROUTES.LANDING}
            onClick={firebase.doSignOut}
            className="nav-link"
          >
            Log out
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withFirebase(NavAuth);
