import React from 'react'
import type { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos:Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}
const TodoList:React.FC<TodoListProps> = ({todos,toggleTodo,deleteTodo}) => {
  if (todos.length === 0) return <p>No todos yet! 🎉</p>;
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList