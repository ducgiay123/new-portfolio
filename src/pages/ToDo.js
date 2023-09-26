import React from "react";
import TodoList from "../components/TodoList";
import "./toDo.css";
const ToDo = () => {
  return (
    <div className="todo-app">
      <div className="todoContainer">
        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default ToDo;
