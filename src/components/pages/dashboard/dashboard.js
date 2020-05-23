import React, { Component } from "react";

import AdjectiveToggleGroup from "../../adjectivetogglegroup/_adjectivetogglegroup";
import JohariWindow from "../../johariwindow/_johariwindow";
import AdjectiveSelection from "../../adjectiveselection/adjectiveselection";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Redirect } from "react-router-dom";
import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../../store/const/routes";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      editToggle: true,
      adjectivesSelectedBySelf: [],
      adjectivesSelectedByOthers: [],
      toggledAdjectives: this.props.adjectivesSelectedBySelf
    };
  }

  handleEditMode = () => {
    console.log(this.state);
    this.setState({ editToggle: !this.state.editToggle });
  };

  componentDidMount() {
    this.setState({ loading: true });

    //Test Auth get Auth from Firestore later
    const auth = "v0tq8YFwb1bRb3jut22iSPhljUw2";

    const adjectivesSelectedBySelf = this.props.firebase.adjectivesSelectedBySelf(
      auth
    );
    const adjectivesSelectedByOthers = this.props.firebase.adjectivesSelectedByOthers(
      auth
    );

    adjectivesSelectedBySelf.get().then(doc => {
      this.setState({ adjectivesSelectedBySelf: doc.data().adjectives });
    });

    adjectivesSelectedByOthers.get().then(doc => {
      this.setState({ adjectivesSelectedByOthers: doc.data().adjectives });
    });

    this.setState({ loading: false });
  }

  render() {
    const auth = this.props.firebase;
    if (auth.uid) return <Redirect to={ROUTES.SIGN_UP} />;

    console.log(this.props);

    return (
      <div className="container">
        <Container fluid="true">
          <Row>
            <Col className="col-12">
              {this.state.editToggle && (
                <AdjectiveSelection
                  onEdit={this.handleEditMode}
                  adjectivesSelectedBySelf={this.state.adjectivesSelectedBySelf}
                  loading={this.loading}
                />
              )}
              {!this.state.editToggle && (
                <AdjectiveToggleGroup
                  onEdit={this.handleEditMode}
                  adjectivesSelectedBySelf={this.state.adjectivesSelectedBySelf}
                />
              )}
            </Col>

            <Col className="col-12">
              <JohariWindow
                adjectivesSelectedBySelf={this.state.adjectivesSelectedBySelf}
                adjectivesSelectedByOthers={
                  this.state.adjectivesSelectedByOthers
                }
                loading={this.loading}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withFirebase(Dashboard);
