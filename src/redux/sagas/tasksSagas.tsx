import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../types/actionTypes";
import * as actions from "../actions";

function* fetchTasksSaga(action) {
  try {
    const response = yield call(fetch, "http://localhost:8080/tasks");
    const data = yield response.json();
    if (data.success) {
      yield put(actions.fetchTasksSuccess(data.data));
    } else {
      yield put(actions.fetchTasksFailure("An error occurred"));
    }
  } catch (error) {
    yield put(actions.fetchTasksFailure(error.message));
  }
}

export function* watchFetchTasks() {
  yield takeLatest(types.FETCH_TASKS_REQUEST, fetchTasksSaga);
}
