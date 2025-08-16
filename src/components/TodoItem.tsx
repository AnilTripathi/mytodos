import React from "react";
import "../App.css";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem:React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span title="Click to toggle completion"
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
