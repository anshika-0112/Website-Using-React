import { Link, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "../../componentStyle/navBar.css";

const Navbar = ({ handleSignOut, auth }) => {
  return (
    <div>
      <nav className="navBar">
        <div id="link1">
          <Link to="/dashboard/home">Home</Link>
          <Link to="/dashboard/about">About</Link>
          <Link to="/dashboard/contact">Contact</Link>
        </div>
        <div id="link2">
          {auth.user ? (
            <>
              <Link id="username" to={`/dashboard/profile/${auth.user}`}>
                {auth.user}
              </Link>
              <button onClick={handleSignOut}>Signout</button>
            </>
          ) : (
            <Link to="/">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
