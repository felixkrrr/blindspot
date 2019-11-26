import React, { Component } from "react";
import NavBar from "./components/header/navbar/navbar";
//import Landing from "./components/pages/landing/landing";
//import About from "./components/pages/about/About";
import AdjectiveToggleGroup from "./components/adjectivetogglegroup/_adjectivetogglegroup";
import JohariWindow from "./components/johariwindow/_johariwindow";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import baseAdjectives from "./const/adjectives";

class App extends Component {
  state = {
    baseAdjectives,
    selectedAdjectives: ["able", "clever"],
    selectedByOthers: [
      { adjective: "able", count: 2 },
      { adjective: "accepting", count: 3 },
      { adjective: "adaptable", count: 0 },
      { adjective: "logical", count: 0 }
    ]
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <NavBar />
        </div>
        <div className="App-body">
          <AdjectiveToggleGroup baseAdjectives={this.state.baseAdjectives} />
          <JohariWindow
            selectedAdjectives={this.state.selectedAdjectives}
            selectedByOthers={this.state.selectedByOthers}
          />
        </div>
      </div>
    );
  }
}

export default App;
