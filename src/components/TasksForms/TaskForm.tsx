// TaskForm.js
import React, { useState } from "react";
import "./TasksForms.css";
import SaveButton from "./../SaveButton/SaveButton";
import ImageInput from "./../ImageInput/ImageInput";

type TaskFormProps = {
  onSave: (data: any) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onSave }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (info: any) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} arquivo carregado com sucesso.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} falha no carregamento do arquivo.`);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implemente a lógica de coleta de dados e chame onSave
    onSave({
      /* dados do formulário, incluindo a imagem */
      image: selectedImage,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="coolinput">
        <label htmlFor="taskTitle" className="text">
          Título:
        </label>
        <input
          type="text"
          id="taskTitle"
          name="title"
          className="input task-title-input"
          placeholder="Escreva aqui..."
        />
      </div>

      <div className="coolinput">
        <label htmlFor="taskDescription" className="text">
          Descrição:
        </label>
        <input
          type="text"
          id="taskDescription"
          name="description"
          className="input task-description-input"
          placeholder="Escreva aqui..."
        />
      </div>

      <ImageInput onChange={handleImageChange} />

      <div className="coolinput">
        <label htmlFor="taskStatus" className="text">
          Status:
        </label>
        <select
          id="taskStatus"
          name="status"
          className="input task-status-select"
        >
          <option value="PENDENTE">Pendente</option>
          <option value="FINALIZADA">Finalizada</option>
        </select>
      </div>

      <SaveButton />
    </form>
  );
};

export default TaskForm;
