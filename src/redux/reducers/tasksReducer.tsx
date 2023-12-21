import * as types from "../types/actionTypes";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
  taskImages: {},
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case types.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.FETCH_TASK_IMAGE_SUCCESS:
      return {
        ...state,
        taskImages: {
          ...state.taskImages,
          [action.payload.taskId]: action.payload.imageData,
        },
      };
    default:
      return state;
  }
};
