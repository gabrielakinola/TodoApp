import React from "react";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="tasks-list">
      <p className="tasks-item">
        Welcome to Web Development, GitHub, HTML, CSS
      </p>
      <button className="remove-button">Remove</button>
    </div>
  );
};

export default Todo;
