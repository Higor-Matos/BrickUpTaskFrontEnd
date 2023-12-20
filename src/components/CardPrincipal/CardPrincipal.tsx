import React, { useState, useEffect } from "react";
import "./CardPrincipal.css";
import ToolCircles from "./../ToolCircles/ToolCircles";
import NewTaskButton from "./../NewTaskButton/NewTaskButton";
import TaskTable from "./../TaskTable/TaskTable"; // Importe TaskTable

const CardPrincipal: React.FC = () => {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas

  useEffect(() => {
    // Substitua este código pelo seu endpoint de API ou lógica de busca de tarefas
    fetch("/path-to-your-tasks.json") // Substitua pelo caminho correto do seu arquivo JSON ou endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTasks(data.data); // Atualiza o estado com as tarefas recebidas
        }
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []); // O array vazio como segundo argumento garante que o efeito será executado apenas uma vez após o primeiro render

  return (
    <div className="card-principal">
      <ToolCircles />
      <div className="new-task-button-container">
        <NewTaskButton />
      </div>
      <div className="card__content">
        <h1>Welcome</h1>
        {/* Inclua o TaskTable passando as tarefas como props */}
        <TaskTable tasks={tasks} />
      </div>
    </div>
  );
};

export default CardPrincipal;
