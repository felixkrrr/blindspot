import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import baseAdjectives from "../../../store/const/adjectives";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>About</h1>
          <p>
            The Johari Window was invented by Joseph Luft and Harrington Ingham
            in the 1950s as a model for mapping personality awareness. By
            describing yourself from a fixed list of adjectives, then asking
            your friends and colleagues to describe you from the same list, a
            grid of overlap and difference can be built up.
          </p>

          <Container fluid="true">
            <Row>
              <Col className="col" sm="12" md="4" xs="12">
                <h5 key="quandrant1">Open</h5>
                Open characteristics are selected by both, the subject and
                peers. These are traits that subject and peers perceive.
              </Col>
              <Col className="col" sm="12" md="4" xs="12">
                <h5 key="quandrant2">Blind</h5>
                Blind characteristics are not selected by subjects, but only by
                their peers. These represent what others perceive but the
                subject does not.
              </Col>
              <Col className="col" sm="12" md="4" xs="12">
                <h5 key="quandrant3">Hidden</h5>
                Hidden characteristics are selected by the subject, but not by
                any of their peers. These are things the peers are either
                unaware of, or that are untrue but for the subject’s claim.
              </Col>
            </Row>
          </Container>

          <h3 key="adjective">The adjectives</h3>
          <ul className="adjective-ul">
            {baseAdjectives.map(function(name, i) {
              return (
                <Button
                  className="adjective-pill"
                  variant="outline-secondary m-1 "
                  size="sm"
                  key={"adjective" + i}
                >
                  {name}
                </Button>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
