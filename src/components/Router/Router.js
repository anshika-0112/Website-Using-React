import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProvideAuth from "../AuthenticationControl/ProvideAuth";
import Navbar from "../Navbar/index";
import React from "react";
import NoMatch from "../NoMatch/index";
import About from "../About/index";
import Contact from "../Contact/index";
import Login from "../Login/index";
import PrivateRoute from "../Router/PrivateRoute";
import Profile from "../Profile/ProfileContainer";
import Search from "../Search/SearchContainer";
import {
  PlanetContainer,
  FilmContainer,
  PersonContainer,
} from "../Details/index";
import { Suspense } from "react";
const Home = React.lazy(() => import("../Home/HomeContainer"));

const Router = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/profile/:userName">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/search/:cName">
            <Search />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          </PrivateRoute>
          <PrivateRoute path="/Films/:filmId">
            <FilmContainer />
          </PrivateRoute>
          <PrivateRoute path="/planets/:planetId">
            <PlanetContainer />
          </PrivateRoute>
          <PrivateRoute path="/People/:peopleId">
            <PersonContainer />
          </PrivateRoute>
          <Route path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};
export default Router;
