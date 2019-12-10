import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {
  deSelectAdjectives,
  selectAdjectives
} from "../../store/actions/adjectiveActions";

//Custom
import AdjectiveToggle from "../button/adjectivetoggle/_adjectivetoggle";

class AdjectiveToggleGroup extends Component {
  handleSelect = adjective => {
    //Checks if item is already selected; not to select it again
    if (!this.props.selectedAdjectives.includes(adjective)) {
      this.props.selectAdjectives(adjective);
    } else {
      console.log("Item was already in Array");
    }
  };

  handleDeSelect = adjective => {
    //removes variable input from array
    this.props.deSelectAdjective(adjective);
  };

  render() {
    console.log(this.props.selectedAdjectives);
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
                  variant="secondary"
                  key={"editSelectedAdjectives"}
                  size="sm"
                  onClick={this.props.onEdit}
                >
                  Save changes
                </Button>
                <Button
                  className="m-0"
                  variant="outline-secondary"
                  key={"editSelectedAdjectives"}
                  size="sm"
                  onClick={this.props.onEdit}
                >
                  Discard changes
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body className="adjective-toggle-container">
          {this.props.baseAdjectives.map(function(item, i) {
            return (
              <AdjectiveToggle
                adjective={item}
                key={i}
                onSelect={this.handleSelect}
                onDeSelect={this.handleDeSelect}
                selected={this.props.selectedAdjectives.includes(item)}
              />
            );
          }, this)}
        </Card.Body>
      </Card>
    );
  }
}

const mapStatetoProps = state => {
  return {
    selectedAdjectives: state.adjectives.selectedAdjectives,
    baseAdjectives: state.adjectives.baseAdjectives
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    deSelectAdjective: adjective => {
      dispatch(deSelectAdjectives(adjective));
    },
    selectAdjectives: adjective => {
      dispatch(selectAdjectives(adjective));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AdjectiveToggleGroup);
