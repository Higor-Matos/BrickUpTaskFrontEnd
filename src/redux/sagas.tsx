import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TASKS_REQUEST,
  fetchTasksSuccess,
  fetchTasksFailure,
} from "./actions";

function* fetchTasksSaga() {
  try {
    const response = yield call(fetch, "http://localhost:8080/tasks");
    const data = yield response.json();
    if (data.success) {
      yield put(fetchTasksSuccess(data.data));
    } else {
      yield put(fetchTasksFailure("An error occurred"));
    }
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* tasksSaga() {
  yield takeLatest(FETCH_TASKS_REQUEST, fetchTasksSaga);
}

export default tasksSaga;
