import { call, put, takeEvery } from "redux-saga/effects";
import { CATEGORIES } from "../../../../constants";
import fetchList from "../requests/fetchList";

function* handleGetList(action) {
  console.log("now here", action);
  let categoryName = action.payload;
  try {
    const list = yield call(() => fetchList(categoryName));
    console.log("yielded list", list);
    if (categoryName === CATEGORIES.PLANET) {
      yield put({ type: "SET_PLANET_LIST", planetList: list });
    }
    if (categoryName === CATEGORIES.PEOPLE)
      yield put({ type: "SET_PEOPLE_LIST", peopleList: list });
    if (categoryName === CATEGORIES.FILM)
      yield put({ type: "SET_FILM_LIST", filmList: list });
  } catch (err) {
    console.log("error", err);
    yield put({ type: "GET_LIST_FAILED", message: err.message });
  }
}

function* watcherListSaga() {
  yield takeEvery("FETCH_LIST_REQUESTED", handleGetList);
}

export default watcherListSaga;
