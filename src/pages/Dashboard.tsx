import { useState } from 'react'
import type { Todo } from '../types';
import { TodoForm } from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Dashboard:React.FC=()=> {
  const [todos,setTodos]=useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (todoData: { text: string; dueDate: Date | null; priority: 'low' | 'medium' | 'high' }) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: todoData.text,
      completed: false,
      assignDate: new Date(),
      dueDate: todoData.dueDate,
      priority: todoData.priority,
      completeDate: null
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id 
        ? { 
            ...todo, 
            completed: !todo.completed,
            completeDate: !todo.completed ? new Date() : null
          } 
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="row h-100 justify-content-center align-items-center">
      <div className="card shadow">
        <div className="card-body p-4">
            <h2 className="text-center mb-4">Todo List</h2>
            <TodoForm addTodo={addTodo} />
            <hr className="my-4"/>
            <TodoList 
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
            <footer className="mt-4 pt-3 border-top">
            <p className="text-center text-muted mb-0">© 2025 My Todos</p>
            </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard