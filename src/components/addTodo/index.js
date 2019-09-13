import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../../store/actions/todoActions'

class addTodo extends Component{
    state = {
        todo :{
            content: '',
            done: false,
        },
        error: ''
    }
    addTodo = (e) => {
        e.preventDefault();
        if(this.state.todo.content == '') {
            this.setState({
                error: 'Please enter a todo'
            });
        } else {
            this.setState({
                error: ''
            });
            this.props.addTodoAction(this.state.todo);
            this.setState({
                todo:{
                    content: ''
                }
            });
            
        }
    }
    handleChange = (e) => {
        const newContent = e.target.value;
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                content: newContent
            }
        }));
    }
    render(){
        const {error, content} = this.state;
        return(
            <section className="add-todo">
                <form className="form-inline">
                    <div className="form-group my-sm-3">
                        <label htmlFor="todo" className="sr-only">New Todo</label>
                        <input type="text" value={this.state.todo.content} className="form-control" id="todo" placeholder="Add a new todo" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.addTodo}>Add</button>
                    
                </form>
                {error && <p>{error}</p>}
            </section>
        )
    }
}


const mapDispatch = {
    addTodoAction
}

export default connect(null, mapDispatch)(addTodo);