import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput';

interface TodoFormProps {
  addTodo: (todo: { text: string; dueDate: Date | null; priority: 'low' | 'medium' | 'high' }) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState<string>("");
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        
        addTodo({
          text: text.trim(),
          dueDate: dueDate ? new Date(dueDate) : null,
          priority
        });
        
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
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-plus-circle me-1"></i>
            Add
          </button>
        </div>
      </div>
    </form>
  )
}
