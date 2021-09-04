import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import setUserDetails from "../redux/user/userActions";
import isAuthenticated from "../redux/auth/authActions";
const NavbarContainer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const isLoggedIn = sessionStorage.getItem("user");
  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    dispatch(setUserDetails(null));
    dispatch(isAuthenticated(false));
    history.push("/");
  };
  return (
    <Navbar handleSignOut={handleSignOut} isLoggedIn={isLoggedIn} />
  );
};

export default NavbarContainer;
