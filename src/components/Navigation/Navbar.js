import { useContext } from "react";
import authContext from "../context";
import { Link, useHistory } from "react-router-dom";
import { Fragment } from "react";
import "../../componentStyle/navBar.css"
const Navbar = ({handleSignOut,auth}) => {
  return (
    <nav className="navBar">
      <div id="link1">
        <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
      <div id="link2">
      {auth.user ? (
        <Fragment>
            <span id="userName">{auth.user}</span>
          <button onClick={handleSignOut}>Signout</button>
        </Fragment>
      ) : (
        <Link to="/">Login</Link>
      )}
      </div>
    </nav>
  );
};
export default Navbar;
