import {  useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import { useDispatch ,useSelector} from "react-redux";
import setUserDetails from "../redux/user/userActions";
import {authenticate} from "../redux/auth/authActions";

const LoginContainer = () => {
  const isAuthenticated= useSelector(state => state.auth.authenticated);
  console.log("tell",isAuthenticated);
  const dispatch = useDispatch();
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleSignIn = (e) => {
    e.preventDefault();
    fetchUserDeatils(state.username);
  };
  const checkUserName = (event) => {
    console.log(event.target.value);
    setState({ ...state, username: event.target.value });
  };

  const checkPasswordName = (event) => {
    setState({ ...state, password: event.target.value });
  };

  const fetchUserDeatils = async (userName) => {
    const url = `https://swapi.dev/api/people/?search=${userName}`;
    const userDetailsResponse = await fetch(url);
    const userDetails = await userDetailsResponse.json();
    dispatch(setUserDetails(userDetails.results[0]));
    let authenticatedUser = [];
    if (userDetails.count !== 0) {
      authenticatedUser = authenticateUser(userDetails.results, userName);
      if (authenticatedUser.length !== 0) {
        sessionStorage.setItem("user", JSON.stringify(userDetails.results[0]));
        setErrorMessage(null);
        dispatch(authenticate());
        console.log("in login",isAuthenticated);
        history.push("/home");
      } else {setErrorMessage("Please enter correct login details");}
    } else setErrorMessage("Please enter correct login details");
  }

  const authenticateUser = (userDetails, userName) => {
    const authenticatedUser = userDetails.filter(
      (userDetails) =>
        userDetails.name.toLowerCase() === userName.toLowerCase() &&
        userDetails.birth_year === state.password
    );
    return authenticatedUser;
  };
  return (
    <>
      <Login
        state={state}
        checkPasswordName={checkPasswordName}
        checkUserName={checkUserName}
        handleSignIn={handleSignIn}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default LoginContainer;