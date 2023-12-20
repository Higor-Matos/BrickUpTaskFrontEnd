import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./CardEnterTask.css";
import ToolCircles from "./../ToolCircles/ToolCircles";
import TaskForm from "./../TasksForms/TaskForm";

type CardEnterTaskProps = {
  onClose: () => void;
};

const CardEnterTask: React.FC<CardEnterTaskProps> = ({ onClose }) => {
  const handleSave = (formData: any) => {
    console.log(formData);
    onClose();
  };

  return (
    <div className="card-enter-task">
      <button className="close-button" onClick={onClose}>
        <CloseOutlined />
      </button>
      <ToolCircles />
      <h2>Nova Tarefa</h2>
      <TaskForm onSave={handleSave} />
    </div>
  );
};

export default CardEnterTask;
