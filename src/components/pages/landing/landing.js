import React, { Component } from "react";
import "./landing.css";
import { Button } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <div className="outer">
        <div className="inner">
          <h1>Better understand the relationship with yourself and others.</h1>
          <span className="span">
            <Button variant="dark" size="lg">
              Get Started!
            </Button>{" "}
            <Button variant="outline-dark m-2" size="lg">
              Learn more
            </Button>
          </span>
        </div>
      </div>
    );
  }
}

export default Landing;
