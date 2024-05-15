import React from "react";
import ReactDOM from "react-dom";
import "./Loading.css";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="container">
      <span className="loader"></span>
    </div>,
    document.body
  );
};

export default Loading;
