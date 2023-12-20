import React from "react";
import "./CardPrincipal.css";
import ToolCircles from "./../ToolCircles/ToolCircles";
import NewTaskButton from "./../NewTaskButton/NewTaskButton";
import TaskTable from "./../TaskTable/TaskTable";

const CardPrincipal: React.FC = () => {
  return (
    <div className="card-principal">
      <ToolCircles />
      <div className="new-task-button-container">
        <NewTaskButton />
      </div>
      <div className="card__content">
        <h1>Tasks BrickUp</h1>
        <TaskTable /> {}
      </div>
    </div>
  );
};

export default CardPrincipal;
