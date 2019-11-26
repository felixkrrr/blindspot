import React, { Component } from "react";
import AdjectiveToggleGroup from "src/components/adjectivetogglegroup/_adjectivetogglegroup";
import JohariWindow from "src/components/johariwindow/_johariwindow";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <AdjectiveToggleGroup baseAdjectives={this.state.baseAdjectives} />
        <JohariWindow
          selectedAdjectives={this.state.selectedAdjectives}
          selectedByOthers={this.state.selectedByOthers}
        />
      </div>
    );
  }
}

export default Dashboard;
