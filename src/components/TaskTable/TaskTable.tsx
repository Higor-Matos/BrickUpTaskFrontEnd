import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksRequest, fetchTaskImageRequest } from "../../redux/actions";
import "./TaskTable.css";
import {
  EditOutlined,
  CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import ImageModal from "./ImageModal";

// Definição do tipo para o estado das tarefas no Redux
type TaskState = {
  loading: boolean;
  tasks: Task[];
  error: string | null;
};

// Definição do tipo para as tarefas
type Task = {
  title: string;
  description: string;
  status: string;
  taskId: string; // Altere para tipo 'string' para corresponder aos tipos dos dados
};

const TaskTable: React.FC = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null); // Altere para tipo 'string'
  const dispatch = useDispatch();
  const { loading, tasks, error } = useSelector(
    (state: { tasks: TaskState }) => state.tasks
  );

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleImageClick = (taskId: string) => {
    console.log("Clicou para buscar imagem da tarefa:", taskId);
    setSelectedTaskId(taskId);
    dispatch(fetchTaskImageRequest(taskId));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {tasks && tasks.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Imagem</th>
              <th>Editar</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.taskId}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>
                  <span
                    className="image-icon"
                    onClick={() => handleImageClick(task.taskId)}
                  >
                    <PictureOutlined />
                  </span>
                </td>

                <td>
                  <span className="edit-icon">
                    <EditOutlined />
                  </span>
                </td>
                <td>
                  <button className="conclude-button">
                    <CheckOutlined /> Concluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Não há tarefas para mostrar 😞</p>
      )}
      {selectedTaskId && (
        <ImageModal
          taskId={selectedTaskId}
          onClose={() => setSelectedTaskId(null)}
        />
      )}
    </div>
  );
};

export default TaskTable;
