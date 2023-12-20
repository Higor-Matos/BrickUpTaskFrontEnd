import * as types from "../types/actionTypes";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case types.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
