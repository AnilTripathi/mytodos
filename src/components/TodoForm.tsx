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
    <form onSubmit={handleSubmit} className="todo-form">
      <CustomInput
        ref={inputRef}
        type="text"
        value={text}
        placeholder="Add new todo..."
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">+ Add</button>
    </form>
  )
}
