// TaskCard.tsx
import React from "react";

interface TaskCardProps {
  title: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, status }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{status}</div>
      {/* Render button based on status */}
      {status === "Pendente" ? (
        <button>Concluir</button>
      ) : (
        <button disabled>Concluída</button>
      )}
    </div>
  );
};

export default TaskCard;
