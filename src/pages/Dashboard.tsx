import { useState } from 'react'
import type { Todo } from '../types';
import { TodoForm } from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Dashboard:React.FC=()=> {
  const [todos,setTodos]=useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
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
    <div className="container">
      <h2 style={{textAlign:'center'}}> Todo List</h2>
      <main>
      <TodoForm addTodo={addTodo} />
      <hr/>
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        />
      </main>
      <footer className="App-footer">
        <p style={{textAlign:'center'}}>© 2025 My Todos</p>
      </footer>
    </div>
  );
}

export default Dashboard