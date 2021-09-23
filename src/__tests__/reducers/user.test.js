import userReducer from "../../components/redux/user/userReducer";
import { getItem } from "../../utils/manageSessionStorage";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../../components/redux/user/userType";
const initialState = {
  loading: false,
  users: getItem("user"),
  error: "",
};

describe("Reducer", () => {
  test("should return default state when state is not undefined", () => {
    expect(userReducer(undefined, { type: "DUMMY_ACTION" })).toEqual(
      initialState
    );
  });

  test("should return default state for DUMMY_ACTION action type", () => {
    expect(userReducer(undefined, { type: "DUMMY_ACTION" })).toEqual(
      initialState
    );
  });

  test("should return expected state for FETCH_USERS_REQUEST action type and specific state", () => {
    const previousState = {
      loading: false,
      users: getItem("user"),
      error: "",
    };
    const action = {
      type: FETCH_USERS_REQUEST,
    };
    const expectedState = {
      loading: true,
      users: getItem("user"),
      error: "",
    };
    expect(userReducer(previousState, action)).toEqual(expectedState);
  });

  test("should return expected state for FETCH_USERS_SUCCESS action type and specific state", () => {
    const previousState = {
      loading: false,
      users: getItem("user"),
      error: "",
    };
    const action = {
      type: FETCH_USERS_SUCCESS,
      payload: { name: "test name" },
    };
    const expectedState = {
      loading: false,
      users: { name: "test name" },
      error: "",
    };
    expect(userReducer(previousState, action)).toEqual(expectedState);
  });

  test("should return expected state for FETCH_USERS_FAILURE action type and specific state", () => {
    const previousState = {
      loading: false,
      users: getItem("user"),
      error: "",
    };
    const action = {
      type: FETCH_USERS_FAILURE,
      payload: "test error",
    };
    const expectedState = {
      loading: false,
      users: getItem("user"),
      error: "test error",
    };
    expect(userReducer(previousState, action)).toEqual(expectedState);
  });
});
