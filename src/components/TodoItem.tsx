import React from "react";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem:React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        title="Click to toggle completion"
        className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
        onClick={() => toggleTodo(todo.id)}
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </span>
      <button 
        className="btn btn-danger btn-sm ms-2" 
        onClick={() => deleteTodo(todo.id)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
