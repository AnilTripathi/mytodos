import React, { useRef, useState, useEffect } from 'react'
import CustomInput from './CustomInput';
import type { Todo } from '../types';

interface TodoFormProps {
  addTodo: (todo: { text: string; dueDate: Date | null; priority: 'low' | 'medium' | 'high' }) => void;
  editTodo?: (id: string, updates: Partial<Todo>) => void;
  todoToEdit?: Todo | null;
  onCancelEdit?: () => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo, editTodo, todoToEdit, onCancelEdit}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState(todoToEdit?.text || "");
    const [dueDate, setDueDate] = useState<string>(
      todoToEdit?.dueDate ? new Date(todoToEdit.dueDate).toISOString().slice(0, 16) : ""
    );
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(todoToEdit?.priority || 'medium');

    useEffect(() => {
      if (todoToEdit) {
        setText(todoToEdit.text);
        setDueDate(todoToEdit.dueDate ? new Date(todoToEdit.dueDate).toISOString().slice(0, 16) : "");
        setPriority(todoToEdit.priority);
      }
    }, [todoToEdit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        
        if (todoToEdit && editTodo) {
          editTodo(todoToEdit.id, {
            text: text.trim(),
            dueDate: dueDate ? new Date(dueDate) : null,
            priority
          });
          onCancelEdit?.();
        } else {
          addTodo({
            text: text.trim(),
            dueDate: dueDate ? new Date(dueDate) : null,
            priority
          });
        }
        
        // Reset form
        setText("");
        setDueDate("");
        setPriority('medium');
        inputRef?.current?.focus();
    };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-12">
          <CustomInput
            ref={inputRef}
            type="text"
            value={text}
            placeholder="Add new todo..."
            onChange={(e) => setText(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="datetime-local"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="Due Date"
          />
        </div>
        <div className="col-md-4">
          <select 
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
        <div className={`${todoToEdit ? 'col-md-4' : 'col-md-2'} d-flex gap-2`}>
          <button type="submit" className="btn btn-primary flex-grow-1">
            <i className={`bi ${todoToEdit ? 'bi-check-lg' : 'bi-plus-circle'} me-1`}></i>
            {todoToEdit ? 'Save' : 'Add'}
          </button>
          {todoToEdit && (
            <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
              <i className="bi bi-x-lg me-1"></i>
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  )
}
