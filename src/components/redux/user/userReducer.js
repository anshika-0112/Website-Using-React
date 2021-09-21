import { SET_USER_DETAILS } from "./userType";

const initialState = {
  userDetails: JSON.parse(sessionStorage.getItem("user")),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export default userReducer;
