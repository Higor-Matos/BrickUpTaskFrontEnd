import * as types from "../types/actionTypes";

// Task actions
export const fetchTasksRequest = () => ({ type: types.FETCH_TASKS_REQUEST });

export const fetchTasksSuccess = (tasks: Task[]) => ({
  type: types.FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error: string) => ({
  type: types.FETCH_TASKS_FAILURE,
  payload: error,
});

export const createTaskRequest = (taskData: Task) => ({
  type: types.CREATE_TASK_REQUEST,
  payload: taskData,
});

export const createTaskSuccess = (task: Task) => ({
  type: types.CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error: string) => ({
  type: types.CREATE_TASK_FAILURE,
  payload: error,
});

export const uploadImageRequest = (imageData: any, taskId: string) => ({
  type: types.UPLOAD_IMAGE_REQUEST,
  payload: { imageData, taskId },
});

export const uploadImageSuccess = (response: any) => ({
  type: types.UPLOAD_IMAGE_SUCCESS,
  payload: response,
});

export const uploadImageFailure = (error: string) => ({
  type: types.UPLOAD_IMAGE_FAILURE,
  payload: error,
});

export const fetchTaskImageRequest = (taskId: string) => ({
  type: types.FETCH_TASK_IMAGE_REQUEST,
  payload: taskId,
});

export const fetchTaskImageSuccess = (imageData: any) => ({
  type: types.FETCH_TASK_IMAGE_SUCCESS,
  payload: imageData,
});

export const fetchTaskImageFailure = (error: string) => ({
  type: types.FETCH_TASK_IMAGE_FAILURE,
  payload: error,
});
