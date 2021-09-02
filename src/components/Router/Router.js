import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProvideAuth from "../AuthenticationControl/ProvideAuth";

import React from "react";
import NoMatch from "../NoMatch/index";

import Login from "../Login/index";
import PrivateRoute from "../Router/PrivateRoute";
import Navbar from "../Navbar/NavbarContainer";
import Dashboard from "../Dashboard/Dashboard";
import About from "../About";
import Contact from "../Contact";

const Router = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};
export default Router;
