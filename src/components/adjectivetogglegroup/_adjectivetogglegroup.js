import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import baseAdjectives from "../../store/const/adjectives";
import { withFirebase } from "../../components/Firebase";

//Custom
import AdjectiveToggle from "../button/adjectivetoggle/_adjectivetoggle";

class AdjectiveToggleGroup extends Component {
  state = { toggledAdjectives: this.props.adjectivesSelectedBySelf };

  handleSelect = adjective => {
    //Checks if item is already selected; not to select it again
    if (!this.state.toggledAdjectives.includes(adjective)) {
      const newToggledAdjectives = [...this.state.toggledAdjectives, adjective];
      this.setState({ toggledAdjectives: newToggledAdjectives });
    } else {
      console.log("Item was already in Array");
    }
  };

  handleDeSelect = adjective => {
    //removes variable input from array

    let newToggledAdjectives = this.state.toggledAdjectives.filter(
      item => item !== adjective
    );
    this.setState({ toggledAdjectives: newToggledAdjectives });
  };

  //build function to get uid later

  saveChanges = () => {
    this.props.firebase.updateAdjectivesSelectedBySelf(
      "v0tq8YFwb1bRb3jut22iSPhljUw2",
      this.state.toggledAdjectives
    );
  };

  render() {
    console.log(this.state.toggledAdjectives);
    return (
      <Card bg="light">
        <Card.Header>
          <Container>
            <Row className="card-row">
              <Col className="card-header-cols">
                <h5 className="card-title">Select adjectives</h5>
              </Col>
              <Col className="text-right">
                <Button
                  className="m-1"
                  variant="outline-secondary"
                  key={"Save"}
                  size="sm"
                  onClick={(this.saveChanges(), this.props.onEdit)}
                >
                  Save changes
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body className="adjective-toggle-container">
          {baseAdjectives.map(function(item, i) {
            return (
              <AdjectiveToggle
                adjective={item}
                key={i}
                onSelect={this.handleSelect}
                onDeSelect={this.handleDeSelect}
                selected={this.state.toggledAdjectives.includes(item)}
              />
            );
          }, this)}
        </Card.Body>
      </Card>
    );
  }
}

export default withFirebase(AdjectiveToggleGroup);
