import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import {fetchUsersSuccess} from "../redux/user/userActions";
import {authenticate} from "../redux/auth/authActions";
import { removeItem,getItem } from "../../utils/manageSessionStorage";

const NavbarContainer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const isLoggedIn = getItem("user");
  
  const handleSignOut = () => {
    removeItem("user");
    dispatch(fetchUsersSuccess([]));
    dispatch(authenticate());
    history.push("/");
  };
  return (
    <Navbar handleSignOut={handleSignOut} isLoggedIn={isLoggedIn} />
  );
};

export default NavbarContainer;
