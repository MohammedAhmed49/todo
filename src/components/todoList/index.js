import React, { Component } from 'react';
import SingleTodo from './singleTodo';
import { connect } from 'react-redux';

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
        const { todos, editTodo, deleteTodo } = this.props;
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

function mapState(state){
    return{
        todos: state.todos
    }
}

export default connect(mapState)(TodoList);