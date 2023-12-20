import React from "react";
import "./CardPrincipal.css";
import ToolCircles from "./../ToolCircles/ToolCircles";

const CardPrincipal: React.FC = () => {
  return (
    <div className="card-principal">
      <ToolCircles />
      <div className="card__content">
        {/* Conteúdo do seu card */}
        <h1>Welcome</h1>
        <p>This card consumes almost the entire screen and stays centered.</p>
      </div>
    </div>
  );
};

export default CardPrincipal;
