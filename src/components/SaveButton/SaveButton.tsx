import React from "react";
import "./SaveButton.css";
import { CloudOutlined } from "@ant-design/icons";

interface SaveButtonProps {
  color?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ color = "#00ad54" }) => {
  const buttonStyle = { "--clr": color } as React.CSSProperties;

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
