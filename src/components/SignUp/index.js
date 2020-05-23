import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import { compose } from "recompose";

import * as ROUTES from "../../store/const/routes";

const SignUpPage = () => (
  <div>
    <SignUp />
  </div>
);

const initialState = {
  email: "",
  password: "",
  lastName: "",
  firstName: ""
};

class SignUpBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    const { email, password, lastName, firstName } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          email,
          lastName,
          firstName
        });
      })
      .then(authUser => {
        this.setState({ ...initialState });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    console.log(this.state);
    return (
      <div className="flex-container">
        <Form onSubmit={this.onSubmit} className="signin-card ">
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={this.onChange}
              type="text"
              placeholder="Enter First Name"
              id="firstName"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.onChange}
              type="text"
              placeholder="Enter Last Name"
              id="lastName"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.onChange}
              type="email"
              placeholder="Enter email"
              id="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              id="password"
            />
          </Form.Group>

          <Button variant="dark" type="onSubmit">
            Sign up
          </Button>

          {error && <p>{error.message}</p>}
        </Form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p Style="text-align: center">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUp = compose(withRouter, withFirebase)(SignUpBase);

export default SignUpPage;

export { SignUp, SignUpLink };
