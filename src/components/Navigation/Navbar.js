import { useContext } from "react";
import authContext from "../context";
import { Link, useHistory } from "react-router-dom";
import { Fragment } from "react";
import "../../componentStyle/navBar.css";

const Navbar = ({ handleSignOut, auth }) => {
  console.log("auth", auth);
  return (
    <nav data-testid="navBar" className="navBar">
      <div id="link1">
        <Link to="/home" data-testid="home">
          Home
        </Link>
        <Link to="/about" data-testid="about">
          About
        </Link>
        <Link to="/contact" data-testid="contact">
          Contact
        </Link>
      </div>
      <div id="link2">
        {auth.user ? (
          <Fragment>
            <span id="userName">{auth.user}</span>
            <button onClick={handleSignOut} data-testid="signoutBtn">
              Signout
            </button>
          </Fragment>
        ) : (
          <Link to="/">Login</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
