import React, { Component } from 'react';
import SingleTodo from './singleTodo';

class TodoList extends Component{
    state = {
        todos: this.props.todos
    }
    
    componentDidMount(){
        this.setState({
            todos: this.props.todos
        });
    }

    render(){
        const { todos } = this.props;
        let counter = 1;
        const allTodos = todos.map((todo) => {
            return(
                <SingleTodo key={todo.id} todo={todo} counter={counter++}/>
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