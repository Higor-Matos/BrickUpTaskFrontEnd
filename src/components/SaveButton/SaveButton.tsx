import React from "react";
import "./SaveButton.css"; // Certifique-se de que este seja o caminho correto para o seu arquivo CSS
import { CloudOutlined } from "@ant-design/icons";

const SaveButton = ({ color = "#00ad54" }) => {
  const buttonStyle = { "--clr": color };

  return (
    <button className="button" style={buttonStyle}>
      <span className="button-decor"></span>
      <div className="button-content">
        <div className="button__icon">
          <CloudOutlined />
        </div>
        <span className="button__text">Salvar</span>
      </div>
    </button>
  );
};

export default SaveButton;
