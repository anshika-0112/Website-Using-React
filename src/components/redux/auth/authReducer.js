import { AUTHENTICATED } from "./authTypes";
const checkUserLoggedIn = () => {
  if (sessionStorage.getItem("user")) {
    return true;
  } else {
    return false;
  }
};
const isLoggedIn = checkUserLoggedIn();
const initialState = {
  authenticated: isLoggedIn,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: !state.authenticated };
    default:
      return state;
  }
};

export default authReducer;
