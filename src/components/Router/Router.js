import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import SearchContainer from "../Search/SearchContainer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { PlanetDetails, FilmDetails, PersonDetails } from "../Details/index";
import PrivateRoute from "./PrivateRoute";
import ProvideAuth from "../AuthenticationControl/ProvideAuth";
import NavbarContainer from "../Navigation/NavbarContainer";
import React, { Suspense } from "react";
const HomeContainer = React.lazy(() => import("../Home/HomeContainer"));

const Router = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute>
            <Route path="/search/:cName" component={SearchContainer} />
            <Suspense fallback={<div>Loading</div>}>
              <Route path="/home" component={HomeContainer} />
            </Suspense>
            <Route path="/Films/:filmId" component={FilmDetails} />
            <Route path="/planets/:planetId" component={PlanetDetails} />
            <Route path="/People/:peopleId" component={PersonDetails} />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};
export default Router;
