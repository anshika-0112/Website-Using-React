import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../Navbar/index";
import React, { useContext } from "react";
import NoMatch from "../NoMatch/index";
import About from "../About/index";
import Contact from "../Contact/index";
import Login from "../Login/index";
import Profile from "../Profile/ProfileContainer";
import Search from "../Search/SearchContainer";
import {
  PlanetContainer,
  FilmContainer,
  PersonContainer,
} from "../Details/index";
import { Suspense } from "react";

import authContext from "../../context";
const Home = React.lazy(() => import("../Home/HomeContainer"));

const Router = () => {
  let auth = useContext(authContext);
  const isLoggedIn = sessionStorage.getItem("user");
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {auth.user || isLoggedIn ? (
          <>
            <Route path="/profile/:userName" component={Profile} />
            <Route path="/search/:cName" component={Search} />
            <Suspense fallback={<div>Loading</div>}>
              <Route path="/home" component={Home} />
              <Route path="/Films/:filmId" component={FilmContainer} />
              <Route path="/planets/:planetId" component={PlanetContainer} />
              <Route path="/People/:peopleId" component={PersonContainer} />
            </Suspense>
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )}
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
