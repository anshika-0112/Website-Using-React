import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProvideAuth from "../AuthenticationControl/ProvideAuth";

import React from "react";
import NoMatch from "../NoMatch/index";

import Login from "../Login/index";
import PrivateRoute from "../Router/PrivateRoute";

import Dashboard from "../Dashboard/Dashboard";


const Router = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
        <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard">
            <Dashboard/>
            </PrivateRoute>
          
          <Route path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};
export default Router;
