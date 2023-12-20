import * as types from "../types/actionTypes";

// Task actions
export const fetchTasksRequest = () => ({ type: types.FETCH_TASKS_REQUEST });
export const fetchTasksSuccess = (tasks) => ({
  type: types.FETCH_TASKS_SUCCESS,
  payload: tasks,
});
export const fetchTasksFailure = (error) => ({
  type: types.FETCH_TASKS_FAILURE,
  payload: error,
});
