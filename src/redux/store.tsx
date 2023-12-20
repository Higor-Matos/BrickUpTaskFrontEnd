import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import TasksReducer from "./TasksReducer";
import tasksSaga from "./sagas";

// Criar o middleware saga
const sagaMiddleware = createSagaMiddleware();

// Montar a store com o redutor e o middleware saga
const store = createStore(TasksReducer, applyMiddleware(sagaMiddleware));

// Iniciar a saga
sagaMiddleware.run(tasksSaga);

export default store;
