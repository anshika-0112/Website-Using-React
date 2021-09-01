import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import authContext from "../../context";
import Login from "./Login";

const LoginContainer = () => {
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const auth = useContext(authContext);
  console.log(auth);
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
    let authenticatedUser = [];
    if (userDetails.count !== 0) {
      authenticatedUser = authenticateUser(userDetails.results, userName);
      console.log("authenticated", authenticatedUser);
    }
    if (userDetails.count === 0 || authenticatedUser.length === 0)
      setErrorMessage("Please enter correct login details");
    else {
      sessionStorage.setItem("user", state.username);
      setErrorMessage(null);
      auth.signin(() => history.push("/dashboard/home"));
    }
  };

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
