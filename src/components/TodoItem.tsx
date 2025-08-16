import React from "react";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem:React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'info';
      default: return 'secondary';
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Date(date).toLocaleString();
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center">
          <span
            className={`me-2 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
            onClick={() => toggleTodo(todo.id)}
            style={{ cursor: 'pointer' }}
          >
            {todo.text}
          </span>
          <span className={`badge bg-${getPriorityBadgeColor(todo.priority)} me-2`}>
            {todo.priority}
          </span>
        </div>
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <div className="d-flex gap-3 small text-muted">
        {todo.dueDate && (
          <div>
            <i className="bi bi-calendar-event me-1"></i>
            Due: {formatDate(todo.dueDate)}
          </div>
        )}
        {todo.completed && todo.completeDate && (
          <div>
            <i className="bi bi-check-circle me-1"></i>
            Completed: {formatDate(todo.completeDate)}
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
