import React, { Component } from 'react';
import SingleTodo from './singleTodo';

class TodoList extends Component{
    state = {
        todos: [
            {id: 1, content: 'Todo item 1', done: true},
            {id: 2, content: 'Todo item 2', done: true},
            {id: 3, content: 'Todo item 3', done: true},
            {id: 4, content: 'Todo item 4', done: true},
            {id: 5, content: 'Todo item 5', done: true}
        ]
    }
    render(){
        const { todos } = this.state;
        const allTodos = todos.map((todo) => {
            return(
                <SingleTodo key={todo.id} todo={todo} />
            )
        });

        return(
            <div>
                <ul className="list-group list-group-flush">
                    { allTodos }
                </ul>
            </div>
        )
    }
}

export default TodoList;