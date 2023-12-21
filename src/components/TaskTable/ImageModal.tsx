import React from "react";
import { useSelector } from "react-redux";

const ImageModal = ({ taskId, onClose }) => {
  const taskImages = useSelector((state) => state.tasks.taskImages);
  const imageData = taskImages[taskId];

  if (!imageData) {
    return null;
  }

  const imageSrc = `data:image/png;base64,${imageData.imageData || imageData}`;

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
        zIndex: 1000, // Alto z-index para sobrepor outros elementos
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={imageSrc}
          alt="Task"
          style={{ maxWidth: "90%", maxHeight: "90%", margin: "auto" }} // Margem para centralizar
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
