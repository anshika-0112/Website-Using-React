import {
  CHECK_PASSWORD,
  CHECK_USERNAME,
  NOT_AUTHENTICATED,
  AUTHENTICATED
} from "./loginTypes";

let initialState = {
  username: "",
  password: "",
  errorMessage: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USERNAME:
      return {
        ...state,
        username: action.value,
      };
    case CHECK_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        errorMessage: "Please enter correct details",
      };
    case AUTHENTICATED:
      return {
        ...state,
        errorMessage: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
