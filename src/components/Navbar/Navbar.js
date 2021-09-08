import { Link } from "react-router-dom";
import React from "react";
import "../../componentStyle/navBar.css";
import { useSelector } from "react-redux";

const Navbar = ({ handleSignOut }) => {
  const user = useSelector((state) => state.user.users);
  const isAuthenticated = useSelector((state) => state.auth.authenticated);

  return (
    <div>
      <nav className="navBar">
        <div id="link1">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div id="link2">
          {isAuthenticated ? (
            <>
            {console.log("in nav user",user)}
              <Link id="username" to={`/profile/${user[0].name}`}>
                {user[0].name}
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
