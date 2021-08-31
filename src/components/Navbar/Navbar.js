import { Link, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "../../componentStyle/navBar.css";
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
const Home = React.lazy(() => import("../Home/HomeContainer"));

const Navbar = ({ handleSignOut, auth }) => {
  return (
    <div>
      <nav className="navBar">
        <div id="link1">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div id="link2">
          {auth.user ? (
            <>
              <Link id="username" to={`/profile/${auth.user}`}>
                {auth.user}
              </Link>
              <button onClick={handleSignOut}>Signout</button>
            </>
          ) : (
            <Link to="/">Login</Link>
          )}
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <PrivateRoute>
          <Route path="/profile/:userName" component={Profile} />
          <Route path="/search/:cName" component={Search} />
          <Suspense fallback={<div>Loading</div>}>
            <Route path="/home" component={Home} />
          </Suspense>
          <Route path="/Films/:filmId" component={FilmContainer} />
          <Route path="/planets/:planetId" component={PlanetContainer} />
          <Route path="/People/:peopleId" component={PersonContainer} />
        </PrivateRoute>
      </Switch>
    </div>
  );
};
export default Navbar;
