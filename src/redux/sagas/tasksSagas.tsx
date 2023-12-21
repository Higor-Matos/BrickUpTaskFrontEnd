import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../types/actionTypes";
import * as actions from "../actions";

// Saga para buscar tarefas
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

// Saga para criar uma tarefa
function* createTaskSaga(action) {
  try {
    const response = yield call(fetch, "http://localhost:8080/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });
    const taskData = yield response.json();

    if (taskData.success) {
      console.log("Task criada com sucesso:", taskData.data);

      yield put(actions.createTaskSuccess(taskData.data));
      yield put(actions.fetchTasksRequest());

      if (action.payload.image) {
        console.log(
          "Iniciando o upload da imagem para o taskId:",
          taskData.data.taskId
        );
        yield call(uploadImage, {
          imageData: action.payload.image,
          taskId: taskData.data.taskId,
        });
      }
    } else {
      console.error("Falha ao criar task:", taskData.message);
      yield put(actions.createTaskFailure("Falha ao criar tarefa"));
    }
  } catch (error) {
    console.error("Erro na saga createTaskSaga:", error.message);
    yield put(actions.createTaskFailure(error.message));
  }
}

// Função para realizar o upload da imagem
function* uploadImage({ imageData, taskId }) {
  try {
    // Remove o prefixo data:image/png;base64, da string base64
    const base64Image = yield call(convertToBase64, imageData);
    const base64ImageFormatted = base64Image.split(",")[1]; // Assume formato data:image/png;base64,
    console.log("Enviando dados da imagem para o servidor:", {
      imageData: base64ImageFormatted,
      taskId,
    });

    const response = yield call(fetch, `http://localhost:8080/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageData: base64ImageFormatted, taskId }),
    });
    const uploadResponse = yield response.json();

    if (uploadResponse.success) {
      console.log("Imagem enviada com sucesso:", uploadResponse);
      yield put(actions.uploadImageSuccess(uploadResponse));
    } else {
      console.error("Falha ao enviar imagem:", uploadResponse.message);
      yield put(actions.uploadImageFailure("Falha ao enviar imagem"));
    }
  } catch (error) {
    console.error("Erro na saga uploadImage:", error.message);
    yield put(actions.uploadImageFailure(error.message));
  }
}

// Função para converter imagem para Base64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("Imagem convertida em Base64:", reader.result);
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    } else {
      reject("No file selected");
    }
  });
}

function* fetchTaskImageSaga(action) {
  try {
    console.log("Buscando imagem para a tarefa com ID:", action.payload);
    const response = yield call(
      fetch,
      `http://localhost:8080/images/task/${action.payload}`
    );
    const imageData = yield response.json();

    console.log("Resposta da busca de imagem:", imageData);

    if (imageData.success) {
      console.log("Imagem recebida com sucesso.");
      yield put(actions.fetchTaskImageSuccess(imageData.data));
    } else {
      console.error("Falha ao buscar imagem:", imageData.message);
      yield put(actions.fetchTaskImageFailure("Falha ao buscar imagem"));
    }
  } catch (error) {
    console.error("Erro na saga fetchTaskImageSaga:", error.message);
    yield put(actions.fetchTaskImageFailure(error.message));
  }
}

export function* watchFetchTaskImage() {
  yield takeLatest(types.FETCH_TASK_IMAGE_REQUEST, fetchTaskImageSaga);
}

// Watchers
export function* watchFetchTasks() {
  yield takeLatest(types.FETCH_TASKS_REQUEST, fetchTasksSaga);
}

export function* watchCreateTask() {
  yield takeLatest(types.CREATE_TASK_REQUEST, createTaskSaga);
}
