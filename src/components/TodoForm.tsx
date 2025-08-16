import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
        inputRef?.current?.focus();
    };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <CustomInput
        ref={inputRef}
        type="text"
        value={text}
        placeholder="Add new todo..."
        onChange={(e) => setText(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        <i className="bi bi-plus-circle me-1"></i>
        Add
      </button>
    </form>
  )
}
