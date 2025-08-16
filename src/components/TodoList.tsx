import React from 'react'
import type { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos:Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}
const TodoList:React.FC<TodoListProps> = ({todos,toggleTodo,deleteTodo}) => {
  return (
    <div className="card">
      <div className="card-body">
        {todos.length === 0 ? (
          <p className="text-center text-muted mb-0">No todos yet! 🎉</p>
        ) : (
          <ul className="list-group list-group-flush">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TodoList