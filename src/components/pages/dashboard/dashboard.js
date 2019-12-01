import React, { Component } from "react";
import AdjectiveToggleGroup from "../../adjectivetogglegroup/_adjectivetogglegroup";
import JohariWindow from "../../johariwindow/_johariwindow";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <AdjectiveToggleGroup />
        <JohariWindow />
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
