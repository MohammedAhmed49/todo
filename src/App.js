import React from 'react';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import TodoApp from './components/todoApp';

library.add(fab, faCheckSquare, faCoffee, faTrash, faPencilAlt);

function App() {
  return (
    <div className="App container">
      <TodoApp />
    </div>
  );
}

export default App;
