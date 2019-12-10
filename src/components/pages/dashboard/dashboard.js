import React, { Component } from "react";

import AdjectiveToggleGroup from "../../adjectivetogglegroup/_adjectivetogglegroup";
import JohariWindow from "../../johariwindow/_johariwindow";
import AdjectiveSelection from "../../adjectiveselection/adjectiveselection";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  state = {
    editToggle: true
  };

  handleEditMode = () => {
    console.log(this.state);
    this.setState({ editToggle: !this.state.editToggle });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <Container fluid="true">
          <Row>
            <Col className="col-12">
              {this.state.editToggle && (
                <AdjectiveSelection onEdit={this.handleEditMode} />
              )}
              {!this.state.editToggle && (
                <AdjectiveToggleGroup onEdit={this.handleEditMode} />
              )}
            </Col>

            <Col className="col-12">
              <JohariWindow />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
