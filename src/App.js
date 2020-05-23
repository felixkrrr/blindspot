//React
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

//Custom Components
import NavBar from "./components/navbar/navbar";
import Landing from "./components/pages/landing/landing";
import About from "./components/pages/about/About";
import Dashboard from "./components/pages/dashboard/dashboard";
import SignInPage from "./components/SignIn/Index";
import SignUpPage from "./components/SignUp/index";

import * as ROUTES from "./store/const/routes";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { withAuthentication } from "./components/Session";

const App = () => (
  <BrowserRouter>
    <div className="App-body">
      <NavBar />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.DASHBOARD} component={Dashboard} />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
