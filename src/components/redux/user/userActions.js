import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userType";
import { authenticate } from "../auth/authActions";
import { setItem } from "../../../utils/manageSessionStorage";

export const fetchUsers = (userName, password) => {
  return async (dispatch) => {
    const url = `https://swapi.dev/api/people/?search=${userName}`;
    dispatch(fetchUsersRequest);
    const userDetailsResponse = await fetch(url);
    console.log("user response", userDetailsResponse);
    const userDetails = await userDetailsResponse.json();
    console.log("user details", userDetails);
    dispatch(fetchUsersSuccess(userDetails.results));
    let authenticatedUser = [];
    if (userDetails.count !== 0) {
      authenticatedUser = authenticateUser(
        userDetails.results,
        userName,
        password
      );
      if (authenticatedUser.length !== 0) {
        setItem("user", JSON.stringify(authenticatedUser));
        dispatch(fetchUsersFailure(""));
        dispatch(authenticate());
      } else {
        console.log("this failure");
        dispatch(fetchUsersFailure("Please enter correct login details"))
      }
    } else {
      console.log("that failure");
      dispatch(fetchUsersFailure("Please enter correct login details"));
    }
  };
};

const authenticateUser = (userDetails, userName, password) => {
  const authenticatedUser = userDetails.filter(
    (userDetails) =>
      userDetails.name.toLowerCase() === userName.toLowerCase() &&
      userDetails.birth_year === password
  );
  return authenticatedUser;
};

export const fetchUsersRequest = () => {
  console.log("request");
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  console.log("users in success", users);
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  console.log("failure");
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
