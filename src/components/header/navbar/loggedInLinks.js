import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const LoggedInLinks = props => {
  return (
    <Nav>
      <Navbar.Text className="nav-text">felix.krauth@gmail.com</Navbar.Text>
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="" onClick={props.signOut} className="nav-link">
        Log out
      </NavLink>
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.authError
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(LoggedInLinks);
