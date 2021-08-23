import { useContext } from "react";
import authContext from "../context";
import {  useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  let history = useHistory();
  let auth = useContext(authContext);
  const isLoggedIn=sessionStorage.getItem("user");
  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    auth.signout(() => history.push("/"));
  };
  return(
      <Navbar handleSignOut={handleSignOut} auth={auth} isLoggedIn={isLoggedIn} />
  )
};

export default NavbarContainer;