// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getItem } from "../utils/manageSessionStorage";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../components/redux/user/userType";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../components/redux/user/userActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const INITIAL_STATE = {
  loading: false,
  users: getItem("user"),
  error: "",
};
const store = mockStore(INITIAL_STATE);
// const mock = new MockAdapter(axios);

describe("Action Creators", () => {
  test("fetchUsersRequest action creator return expected action", () => {
    const expectedAction = {
      type: FETCH_USERS_REQUEST,
    };

    expect(fetchUsersRequest()).toEqual(expectedAction);
  });

  test("fetchUsersSuccess action creator return expected action", () => {
    const expectedAction = {
      type: FETCH_USERS_SUCCESS,
      payload: { name: "test name" },
    };

    expect(fetchUsersSuccess({ name: "test name" })).toEqual(expectedAction);
  });

  test("fetchUsersFailure action creator return expected action", () => {
    const expectedAction = {
      type: FETCH_USERS_FAILURE,
      payload: "test error",
    };

    expect(fetchUsersFailure("test error")).toEqual(expectedAction);
  });
});
