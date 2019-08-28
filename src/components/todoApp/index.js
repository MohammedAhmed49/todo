import React, { Component } from 'react';
import TodoList from '../todoList';
import AddTodo from '../addTodo';

class todoApp extends Component{
    state = {
        todos: [
            {id: 1, content: 'Todo item 1', done: false},
            {id: 2, content: 'Todo item 2', done: false},
            {id: 3, content: 'Todo item 3', done: false},
            {id: 4, content: 'Todo item 4', done: false},
            {id: 5, content: 'Todo item 5', done: false}
        ],
        latestID: null
    }
    
    componentDidMount(){
        const len = Object.keys(this.state.todos).length;
        this.setState({
            latestID: this.state.todos[len-1].id + 1
        })
    }

    
    addTodo = (todo) => {
        let todos = this.state.todos;
        todo.id = this.state.latestID;
        this.setState({
            todos: [...todos, todo]
        })
    }

    editTodo = (todo) => {
        let todos = this.state.todos;
        let newTodos = todos.map((item) => {
            if(todo.id === item.id){
                return todo;
            } else {
                return item;
            }
        });
        this.setState({
            todos: newTodos
        })
        console.log(newTodos);
    }
    render(){
        const { todos } = this.state;
        return(
            <div>
                <h1 className="text-center my-4">Todo app</h1>
                <TodoList todos={todos} editTodo={this.editTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default todoApp;