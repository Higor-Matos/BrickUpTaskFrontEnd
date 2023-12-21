import { all, fork } from "redux-saga/effects";
import {
  watchFetchTasks,
  watchCreateTask,
  watchFetchTaskImage,
} from "./tasksSagas";

export default function* rootSaga() {
  yield all([
    fork(watchFetchTasks),
    fork(watchCreateTask),
    fork(watchFetchTaskImage),
  ]);
}
