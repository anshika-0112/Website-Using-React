import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const LoginContainer = () => {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.user.users);
  const errorMessage = useSelector((state) => state.user.error);
  console.log("login users", user);
  const dispatch = useDispatch();
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(fetchUsers(state.username, state.password));
  };

  useEffect(() => {
    console.log("in log auth",isAuthenticated)
    if(isAuthenticated)
    history.push("/home");
  }, [isAuthenticated]);

  const checkUserName = (event) => {
    setState({ ...state, username: event.target.value });
  };

  const checkPasswordName = (event) => {
    setState({ ...state, password: event.target.value });
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