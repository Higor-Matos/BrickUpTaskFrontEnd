import { all, fork } from "redux-saga/effects";
import { watchFetchTasks } from "./tasksSagas";

export default function* rootSaga() {
  yield all([fork(watchFetchTasks)]);
}
