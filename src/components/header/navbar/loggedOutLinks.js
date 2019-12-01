import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoggedOutLinks = props => {
  return (
    <Nav>
      <NavLink to="/signup" className="nav-link">
        Create account
      </NavLink>
      <NavLink to="/signin" className="nav-link">
        Log in
      </NavLink>
    </Nav>
  );
};

export default LoggedOutLinks;
