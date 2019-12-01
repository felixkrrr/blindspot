import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

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
    const { authError } = this.props;
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
