import React from "react";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const TodoItem:React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);
  const [editDueDate, setEditDueDate] = React.useState(
    todo.dueDate ? new Date(todo.dueDate).toISOString().slice(0, 16) : ""
  );
  const [editPriority, setEditPriority] = React.useState(todo.priority);
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

  const handleSave = () => {
    onEdit({
      ...todo,
      text: editText.trim(),
      dueDate: editDueDate ? new Date(editDueDate) : null,
      priority: editPriority
    });
    setIsEditing(false);
  };

  return (
    <li className="list-group-item">
      {isEditing ? (
        <div className="mb-3">
          <div className="row g-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="datetime-local"
                className="form-control"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
            <div className="col-md-2">
              <div className="d-flex gap-2">
                <button className="btn btn-success btn-sm w-100" onClick={handleSave}>
                  <i className="bi bi-check-lg"></i>
                </button>
                <button className="btn btn-secondary btn-sm w-100" onClick={() => setIsEditing(false)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="d-flex align-items-center gap-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
              </div>
              <span className={todo.completed ? "text-decoration-line-through text-muted" : ""}>
                {todo.text}
              </span>
              <span className={`badge bg-${getPriorityBadgeColor(todo.priority)}`}>
                {todo.priority}
              </span>
            </div>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => onEdit(todo)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
          <div className="d-flex gap-3 small text-muted ms-4">
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
        </>
      )}
    </li>
  );
};

export default TodoItem;
