import React, { Component } from "react";
import AdjectiveToggleGroup from "../../adjectivetogglegroup/_adjectivetogglegroup";
import JohariWindow from "../../johariwindow/_johariwindow";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <AdjectiveToggleGroup />
        <JohariWindow />
      </div>
    );
  }
}

export default Dashboard;
