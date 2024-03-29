import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { auth, authError } = this.props;

    //redirect if loggedin
    if (auth.uid) return <Redirect to="/dashboard" />;

    return (
      <div className="flex-container">
        <Form onSubmit={this.handleSubmit} className="signin-card ">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              id="password"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Sign in
          </Button>

          <div>{authError ? <p>{authError}</p> : null}</div>
        </Form>
      </div>
    );
  }
}

export default SignIn;
