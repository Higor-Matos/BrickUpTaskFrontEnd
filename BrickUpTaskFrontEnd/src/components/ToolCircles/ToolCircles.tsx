import React from "react";
import "./ToolCircles.css";

const ToolCircles: React.FC = () => {
  return (
    <div className="tools">
      <div className="circle">
        <span className="red box"></span>
      </div>
      <div className="circle">
        <span className="yellow box"></span>
      </div>
      <div className="circle">
        <span className="green box"></span>
      </div>
    </div>
  );
};

export default ToolCircles;
