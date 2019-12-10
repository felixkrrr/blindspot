import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const LoggedInLinks = props => {
  const { auth } = props;
  return (
    <Nav>
      <Navbar.Text className="nav-text">{auth.email}</Navbar.Text>

      <NavLink exact to="/" onClick={props.signOut} className="nav-link">
        Log out
      </NavLink>
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(LoggedInLinks);
