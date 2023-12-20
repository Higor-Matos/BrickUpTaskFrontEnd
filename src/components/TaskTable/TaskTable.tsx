import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksRequest } from "../../redux/actions";
import "./TaskTable.css";
import {
  EditOutlined,
  CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";

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
  taskId: number;
};

const TaskTable: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, tasks, error } = useSelector(
    (state: { tasks: TaskState }) => state.tasks
  );

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
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
                  <span className="image-icon">
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
    </div>
  );
};

export default TaskTable;
