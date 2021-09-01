import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import authContext from "../../context";
import Login from "./Login";
import { useSelector,useDispatch } from "react-redux";
import { check_username,check_password,not_authenticated,authenticated} from "../redux/login/loginActions";
const LoginContainer = () => {
  let history = useHistory();
  // const [state, setState] = useState({
  //   username: "",
  //   password: "",
  // });
  const dispatch = useDispatch();
  const username=useSelector(state => state.username);
  const password=useSelector(state => state.password);
  const errorMessage=useSelector(state => state.errorMessage);
  const auth = useContext(authContext);
  console.log(auth);
  const handleSignIn = (e) => {
    e.preventDefault();
    fetchUserDeatils(username);
  };
  // const checkUserName = (event) => {
  //   console.log(event.target.value);
  //   setState({ ...state, username: event.target.value });
  // };
  // const checkPasswordName = (event) => {
  //   setState({ ...state, password: event.target.value });
  // };
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
      // setErrorMessage("Please enter correct login details");
      dispatch(not_authenticated());
    else {
      sessionStorage.setItem("user", username);
      // setErrorMessage(null);
      dispatch(authenticated());
      auth.signin(() => history.push("/home"));
    }
  };

  const authenticateUser = (userDetails, userName) => {
    const authenticatedUser = userDetails.filter(
      (userDetails) =>
        userDetails.name.toLowerCase() === userName.toLowerCase() &&
        userDetails.birth_year === password
    );
    return authenticatedUser;
  };
  return (
    <>
      <Login
        username={username}
        password={password}
        checkPassword={check_password}
        checkUserName={check_username}
        handleSignIn={handleSignIn}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default LoginContainer;
