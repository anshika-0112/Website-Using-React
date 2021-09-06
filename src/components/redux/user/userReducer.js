import { SET_USER_DETAILS } from "./userType";
import { getItem } from "../../../utils/manageSessionStorage";
const initialState = {
  userDetails: JSON.parse(getItem("user"))
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:console.log(action.payload);
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export default userReducer;
