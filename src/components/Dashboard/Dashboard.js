import Navbar from "../Navbar/index";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Profile from "../Profile/ProfileContainer";
import Search from "../Search/SearchContainer";
import Advertisement from "../Advertisement/Advertisement";
import {
  PlanetContainer,
  FilmContainer,
  PersonContainer,
} from "../Details/index";
import Footer from "../Footer/index";
import About from "../About/index";
import Contact from "../Contact/index";
import { Suspense } from "react";
import NoMatch from "../NoMatch";
const Home = React.lazy(() => import("../Home/HomeContainer"));
const Dashboard = () => {
  let match = useRouteMatch();
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/dashboard/about" component={About} />
        <Route path="/dashboard/contact" component={Contact} />
        <Route path="/dashboard/profile/:userName" component={Profile} />
        <Route path={`${match.path}/search/:cName`} component={Search} />
        <Route path={`${match.path}/home`}>
          <Suspense fallback={<div>Loading</div>}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/dashboard/Films/:filmId" component={FilmContainer} />
        <Route
          path="/dashboard/planets/:planetId"
          component={PlanetContainer}
        />
        <Route path="/dashboard/People/:peopleId" component={PersonContainer} />
        <Route path="*" component={NoMatch}/>
      </Switch>
      <Advertisement/>
      <Footer/>
    </>
  );
};

export default Dashboard;
