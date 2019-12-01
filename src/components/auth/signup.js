import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    lastName: "",
    firstName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.type]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;

    return (
      <div className="flex-container">
        <Form onSubmit={this.handleSubmit} className="signin-card ">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              placeholder="Enter First Name"
              id="firstName"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Last Name"
              id="lastName"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              id="password"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Sign up
          </Button>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
