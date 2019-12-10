import React, { Component } from "react";
//import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//firestore relevant

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class AdjectiveSelection extends Component {
  render() {
    return (
      <Card bg="light">
        <Card.Header>
          <Container>
            <Row className="card-row">
              <Col className="card-header-cols">
                <h5 className="card-title">Adjectives selected by you</h5>
              </Col>
              <Col className="text-right">
                <Button
                  className="m-1"
                  variant="outline-secondary"
                  key={"editToggle"}
                  size="sm"
                  onClick={this.props.onEdit}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          {this.props.selectedAdjectives.map(function(item, i) {
            return (
              <Button
                disabled
                className="m-1"
                variant="secondary"
                key={"selected" + i}
                size="sm"
              >
                {item}
              </Button>
            );
          }, this)}

          {this.props.selectedAdjectives.length === 0 ? (
            <p className="empty-text">
              You have not selected any adjectives...
            </p>
          ) : null}
        </Card.Body>
      </Card>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
  return {
    selectedAdjectives: state.adjectives.selectedAdjectives,
    selectedAdjectivesNew: state.firestore.data,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStatetoProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users/${auth.uid}/selectedBySelf"
      }
    ];
  })
)(AdjectiveSelection);
