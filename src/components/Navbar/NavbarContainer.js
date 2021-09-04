import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import setUserDetails from "../redux/user/userActions";
import {authenticate} from "../redux/auth/authActions";
const NavbarContainer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const isLoggedIn = sessionStorage.getItem("user");
  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    dispatch(setUserDetails(null));
    dispatch(authenticate());
    history.push("/");
  };
  return (
    <Navbar handleSignOut={handleSignOut} isLoggedIn={isLoggedIn} />
  );
};

export default NavbarContainer;
