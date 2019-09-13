import React, { Component } from 'react';
import TodoList from '../todoList';
import AddTodo from '../addTodo';

class todoApp extends Component{
    render(){
        return(
            <div>
                <h1 className="text-center my-4">Todo app</h1>
                <TodoList/>
                <AddTodo/>
            </div>
        )
    }
}

export default todoApp;