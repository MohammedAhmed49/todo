import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';

function App() {
  return (
    <div className="App container">
      <h1 className="text-center my-4">Todo app</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
