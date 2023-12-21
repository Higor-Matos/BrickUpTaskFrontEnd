import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./CardEnterTask.css";
import ToolCircles from "./../ToolCircles/ToolCircles";
import TaskForm from "./../TasksForms/TaskForm";
import "react-toastify/dist/ReactToastify.css";

interface CardEnterTaskProps {
  onClose: () => void;
}

const CardEnterTask: React.FC<CardEnterTaskProps> = ({ onClose }) => {
  return (
    <div className="card-enter-task">
      <button className="close-button" onClick={onClose}>
        <CloseOutlined />
      </button>
      <ToolCircles />
      <h2>Nova Tarefa</h2>
      <TaskForm onSave={onClose} />
    </div>
  );
};

export default CardEnterTask;
