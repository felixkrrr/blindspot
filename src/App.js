//React
import React, { Component } from "react";
import NavBar from "./components/header/navbar/navbar";
import { BrowserRouter, Route } from "react-router-dom";

//Custom Components
import Landing from "./components/pages/landing/landing";
import About from "./components/pages/about/About";
import Dashboard from "./components/pages/dashboard/dashboard";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";

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
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
