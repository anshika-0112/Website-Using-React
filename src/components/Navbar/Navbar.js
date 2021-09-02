import { Link, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "../../componentStyle/navBar.css";

const Navbar = ({ handleSignOut, auth }) => {
  console.log("auth",auth);
  return (
    <div>
      <nav className="navBar">
        <div id="link1">
          <Link to="/dashboard/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
