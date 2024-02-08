import React from "react";
import "./AddTodoForm.css";

const AddTodoForm = () => {
  return (
    <form className="form-container">
      <div className="input-task">
        <label htmlFor="inputTask">Enter Task</label>
        <input id="todo-text" type="text" />
      </div>
      <button className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTodoForm;
