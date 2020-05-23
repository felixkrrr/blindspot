import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as ROUTES from "../../store/const/routes";

const SignInPage = () => (
  <div>
    <SignInForm />
    <SignUpLink />
  </div>
);
const INITIAL_STATE = { email: "", password: "", error: null };

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { error } = this.state;
    console.log(this.state);

    return (
      <div className="flex-container">
        <Form onSubmit={this.onSubmit} className="signin-card ">
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
          <Button variant="dark" type="submit">
            Sign in
          </Button>
          {error && <p>{error.message}</p>}
        </Form>
      </div>
    );
  }
}
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
