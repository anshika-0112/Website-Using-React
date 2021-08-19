import { useContext } from "react";
import authContext from "../context";
import { Link, useHistory } from "react-router-dom";
import { Fragment } from "react";
const Navbar = () => {
    let history=useHistory();
  let auth = useContext(authContext);
  const handleSignOut = () => {
      sessionStorage.removeItem("user");
      auth.signout(()=>history.push('/'))
  };
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {auth.user ? (
        <Fragment>
            <span>{auth.user}</span>
          <button onClick={handleSignOut}>Signout</button>
        </Fragment>
      ) : (
        <Link to="/">Login</Link>
      )}
    </nav>
  );
};
export default Navbar;
