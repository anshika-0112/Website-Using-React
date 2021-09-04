import { Link} from "react-router-dom";
import React from "react";
import "../../componentStyle/navBar.css";
import { useSelector } from "react-redux";

const Navbar = ({ handleSignOut }) => {
  const user=useSelector(state => state.user.userDetails)
  const isAuthenticated=useSelector(state => state.auth.isAuthenticated)

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
              <Link id="username" to={`/profile/${user.name}`}>
                {user.name}
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
