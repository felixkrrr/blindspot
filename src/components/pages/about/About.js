import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import baseAdjectives from "../../../store/const/adjectives";

import { withFirebase } from "../../Firebase";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, adjectives: [] };
  }

  render() {
    console.log(baseAdjectives);
    return (
      <div className="container">
        <div className="content">
          <Card className="card-margin" bg="light">
            <Card.Header>
              <h5 className="card-title" key="adjective">
                Background
              </h5>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                The Johari Window was invented by Joseph Luft and Harrington
                Ingham in the 1950s as a model for mapping personality
                awareness. By describing yourself from a fixed list of
                adjectives, then asking your friends and colleagues to describe
                you from the same list, a grid of overlap and difference can be
                built up.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card bg="light">
            <Card.Header>
              <h5 className="card-title" key="adjective">
                The Quadrants
              </h5>
            </Card.Header>
            <Card.Body>
              <Container fluid="true">
                <Row>
                  <Col className="col" sm="12" md="4" xs="12">
                    <h6 key="quandrant1">Open</h6>
                    Open characteristics are selected by both, the subject and
                    peers. These are traits that subject and peers perceive.
                  </Col>
                  <Col className="col" sm="12" md="4" xs="12">
                    <h6 key="quandrant2">Blind</h6>
                    Blind characteristics are not selected by subjects, but only
                    by their peers. These represent what others perceive but the
                    subject does not.
                  </Col>
                  <Col className="col" sm="12" md="4" xs="12">
                    <h6 key="quandrant3">Hidden</h6>
                    Hidden characteristics are selected by the subject, but not
                    by any of their peers. These are things the peers are either
                    unaware of, or that are untrue but for the subject’s claim.
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>

          <Card className="card-margin" bg="light">
            <Card.Header>
              <h5 className="card-title" key="adjective">
                The adjectives
              </h5>
            </Card.Header>
            <Card.Body>
              <ul className="adjective-ul adjective-toggle-container">
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
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default withFirebase(About);
