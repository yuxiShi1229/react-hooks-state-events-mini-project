import React from "react";

function Task({ text, category, onTaskDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onTaskDelete({ text, category })}>
        X
      </button>
    </div>
  );
}

export default Task;