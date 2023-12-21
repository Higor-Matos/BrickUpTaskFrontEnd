import React, { useState } from "react";
import "./TasksForms.css";
import { useDispatch } from "react-redux";
import SaveButton from "./../SaveButton/SaveButton";
import ImageInput, { ImageInputProps } from "./../ImageInput/ImageInput";
import { createTaskRequest } from "../../redux/actions/index";
import { toast } from "react-toastify";
import { fetchTasksRequest } from "../../redux/actions";

interface TaskFormProps {
  onSave: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave }) => {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange: ImageInputProps["onChange"] = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      toast.success(`${info.file.name} arquivo carregado com sucesso.`);
    } else if (info.file.status === "error") {
      toast.error(`${info.file.name} falha no carregamento do arquivo.`);
    }
  };

  const handleImageSelect: ImageInputProps["onImageSelect"] = (file) => {
    setSelectedImage(file);
    console.log("Imagem selecionada:", file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const title = (event.target as any).taskTitle.value;
    const description = (event.target as any).taskDescription.value;
    const status = (event.target as any).taskStatus.value;

    if (!title || !description || !selectedImage) {
      toast.error(
        "Por favor, preencha todos os campos e selecione uma imagem."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(
        createTaskRequest({ title, description, status, image: selectedImage })
      );
      dispatch(fetchTasksRequest());

      toast.success("Tarefa salva com sucesso!");
      onSave();
    } catch (error) {
      console.error("Erro ao salvar a tarefa:", error);
      toast.error("Erro ao salvar a tarefa.");
    } finally {
      setIsSubmitting(false);
    }
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
          name="taskTitle"
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
          name="taskDescription"
          className="input task-description-input"
          placeholder="Escreva aqui..."
        />
      </div>

      <ImageInput
        onChange={handleImageChange}
        onImageSelect={handleImageSelect}
      />

      <div className="coolinput">
        <label htmlFor="taskStatus" className="text">
          Status:
        </label>
        <select
          id="taskStatus"
          name="taskStatus"
          className="input task-status-select"
        >
          <option value="PENDENTE">Pendente</option>
          <option value="FINALIZADA">Finalizada</option>
        </select>
      </div>

      <SaveButton disabled={isSubmitting} />
    </form>
  );
};

export default TaskForm;
