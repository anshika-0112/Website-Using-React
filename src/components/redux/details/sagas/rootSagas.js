import { all } from "redux-saga/effects";
import watcherListSaga from "./handlers/fetchList";

export default function* rootSaga() {
  yield all([watcherListSaga()]);
}
