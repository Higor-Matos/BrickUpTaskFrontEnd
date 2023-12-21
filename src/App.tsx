import React from "react";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default App;
