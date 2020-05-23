import React from "react";

import NavNoAuth from "./navNoAuth";
import NavAuth from "./navAuth";

import { AuthUserContext } from "../Session";

const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavAuth /> : <NavNoAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

export default NavBar;
