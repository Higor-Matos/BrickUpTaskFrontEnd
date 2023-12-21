import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/index";

interface ImageModalProps {
  taskId: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ taskId, onClose }) => {
  const taskImages = useSelector((state: RootState) => state.tasks.taskImages);
  const imageData = taskImages[taskId];

  if (typeof imageData !== "string") {
    return null;
  }

  const imageSrc = `data:image/png;base64,${imageData}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={imageSrc}
          alt="Task"
          style={{ maxWidth: "90%", maxHeight: "90%", margin: "auto" }}
        />

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "1.5rem",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
