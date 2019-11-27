//React
import React, { Component } from "react";
import NavBar from "./components/header/navbar/navbar";
import { BrowserRouter, Route } from "react-router-dom";

//Custom Components
import Landing from "./components/pages/landing/landing";
import About from "./components/pages/about/About";
import Dashboard from "./components/pages/dashboard/dashboard";
import AdjectiveSelection from "./components/adjectiveselection/adjectiveselection";
import AdjectiveToggleGroup from "./components/adjectivetogglegroup/_adjectivetogglegroup";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
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
