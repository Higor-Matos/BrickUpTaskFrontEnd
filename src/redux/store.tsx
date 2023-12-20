import { combineReducers } from "redux";
import rootReducer from "./TasksReducer"; // Importe o rootReducer
import rootSaga from "./sagas"; // Importe o rootSaga

// Combine os reducers
const rootReducerCombined = combineReducers({
  tasks: rootReducer,
});

// Montar a store com o rootReducer combinado
const store = createStore(rootReducerCombined, applyMiddleware(sagaMiddleware));

// Iniciar a saga
sagaMiddleware.run(rootSaga);

export default store;
