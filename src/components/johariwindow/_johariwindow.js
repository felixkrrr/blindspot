import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./_johariwindow.css";

class JohariWindow extends Component {
  //CUSTOM FUNCTIONS FOR JOHARI CALCULATION
  computeOpen = () => {
    const own = this.props.adjectivesSelectedBySelf;
    const others = this.props.adjectivesSelectedByOthers;

    let open = own.filter(x => others.includes(x));
    return open;
  };

  computeBlind = () => {
    const own = this.props.adjectivesSelectedBySelf;
    const others = this.props.adjectivesSelectedByOthers;

    let blind = others.filter(x => !own.includes(x));
    return blind;
  };

  computeHidden = () => {
    const own = this.props.adjectivesSelectedBySelf;
    const others = this.props.adjectivesSelectedByOthers.map(function(obj) {
      return obj.adjective;
    });
    let hidden = own.filter(x => !others.includes(x));
    return hidden;
  };

  computeCounter = () => {
    const count = this.props.adjectivesSelectedByOthers.count;
    return count;
  };

  render() {
    return (
      <Card bg="light">
        <Card.Header>
          <Container>
            <Row className="card-row">
              <Col className="card-header-cols">
                <h5 className="card-title">Your Johari Window</h5>
              </Col>
              <Col className="text-right">
                <Button
                  className="m-1"
                  variant="outline-secondary"
                  key={"editSelectedAdjectives"}
                  size="sm"
                >
                  Share link
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <div className="johariWindow">
            <div className="window">
              <h6 key="open">Open</h6>

              {this.computeOpen().map(function(item, i) {
                return (
                  <Button
                    disabled
                    size="sm"
                    variant="secondary"
                    className="m-1"
                    key={item + i}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
            <div className="window">
              <h6 key="blind">Blind</h6>
              {this.computeBlind().map(function(item, i) {
                return (
                  <Button
                    disabled
                    size="sm"
                    variant="secondary"
                    className="m-1"
                    key={item + i}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
            <div className="window">
              <h6 key="hidden">Hidden</h6>
              {this.computeHidden().map(function(item, i) {
                return (
                  <Button
                    disabled
                    size="sm"
                    variant="secondary"
                    className="m-1"
                    key={item + i}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default JohariWindow;
