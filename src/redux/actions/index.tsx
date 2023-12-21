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

export const createTaskRequest = (taskData) => ({
  type: types.CREATE_TASK_REQUEST,
  payload: taskData,
});

export const createTaskSuccess = (task) => ({
  type: types.CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: types.CREATE_TASK_FAILURE,
  payload: error,
});

export const uploadImageRequest = (imageData, taskId) => ({
  type: types.UPLOAD_IMAGE_REQUEST,
  payload: { imageData, taskId },
});

export const uploadImageSuccess = (response) => ({
  type: types.UPLOAD_IMAGE_SUCCESS,
  payload: response,
});

export const uploadImageFailure = (error) => ({
  type: types.UPLOAD_IMAGE_FAILURE,
  payload: error,
});

export const fetchTaskImageRequest = (taskId) => ({
  type: types.FETCH_TASK_IMAGE_REQUEST,
  payload: taskId,
});

export const fetchTaskImageSuccess = (imageData) => ({
  type: types.FETCH_TASK_IMAGE_SUCCESS,
  payload: imageData,
});

export const fetchTaskImageFailure = (error) => ({
  type: types.FETCH_TASK_IMAGE_FAILURE,
  payload: error,
});
