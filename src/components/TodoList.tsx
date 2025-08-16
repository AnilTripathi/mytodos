import React from 'react'
import type { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    onEdit: (todo: Todo) => void;
}

const TodoList:React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo, onEdit}) => {
  // Sort todos: incomplete first (by due date), then completed
  const sortedTodos = React.useMemo(() => {
    const incompleteTodos = todos
      .filter(todo => !todo.completed)
      .sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });

    const completedTodos = todos
      .filter(todo => todo.completed)
      .sort((a, b) => {
        if (!a.completeDate) return 1;
        if (!b.completeDate) return -1;
        return new Date(b.completeDate).getTime() - new Date(a.completeDate).getTime();
      });

    return [...incompleteTodos, ...completedTodos];
  }, [todos]);

  return (
    <div className="card">
      <div className="card-body">
        {todos.length === 0 ? (
          <p className="text-center text-muted mb-0">No todos yet! 🎉</p>
        ) : (
          <ul className="list-group list-group-flush">
            {sortedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                onEdit={onEdit}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TodoList