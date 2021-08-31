import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProvideAuth from "../AuthenticationControl/ProvideAuth";
import Navbar from "../Navbar/index";
import React from "react";
import NoMatch from "../NoMatch/index";

const Router = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Navbar}/>
        <Route path="*"component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};
export default Router;
