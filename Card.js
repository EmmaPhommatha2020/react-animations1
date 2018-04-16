import React from "react";
import "./Card.css";

export default function Card({ todo, toggle, removeTodo }) {
  return (
    <div className="card-container">
      <div
        onClick={() => toggle(todo.key)}
        className={todo.data.completed ? "check toggle-green" : "check"}
      />
      <div className={todo.data.completed ? "todo completed" : "todo"}>
        {todo.data.todo}
      </div>
      <div onClick={() => removeTodo(todo.key)} className="remove">
        X
      </div>
    </div>
  );
}
