//React
import React, { Component } from "react";
import NavBar from "./components/header/navbar/navbar";
import { BrowserRouter, Route } from "react-router-dom";

//Custom Components
import Landing from "./components/pages/landing/landing";
import About from "./components/pages/about/About";
import Dashboard from "./components/johariwindow/_johariwindow";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Data
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
      <BrowserRouter>
        <div>
          <div className="App-body">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/log-in" component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
