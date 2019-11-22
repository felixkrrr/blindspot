import React, { Component } from "react";

import NavBar from "./components/header/navbar/navbar";
import Landing from "./components/pages/landing/landing";
import About from "./components/pages/about/About";
import AdjectiveToggleGroup from "./components/adjectivetogglegroup/_adjectivetogglegroup";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import baseAdjectives from "./const/adjectives";

class App extends Component {
  state = {
    baseAdjectives,
    selectedAdjectives: []
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <NavBar />
        </div>
        <div className="App-body">
          <AdjectiveToggleGroup baseAdjectives={this.state.baseAdjectives} />
        </div>
      </div>
    );
  }
}

export default App;
