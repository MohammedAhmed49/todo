import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux'


class singleTodo extends Component {
    state = {
        todo: this.props.todo,
        editMode: false
    }
    editTodo = (e) => {
        e.preventDefault();
        this.setState({
            editMode: !this.state.editMode
        });
    }
    changeTodo = (e) => {
        let newContent = e.target.value;
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                content: newContent
            }
        }));
        
    }
    edit = (e) => {
        e.preventDefault();
        if(this.state.todo.content === '' || this.state.todo.content === null || this.state.todo.content === ' '){
            alert('Todo cant be empty');
            this.setState(prevState => ({
                todo: {
                    ...prevState.todo,
                    content: this.props.todo.content
                },
                editMode: !this.state.editMode
            }));
        } else {
            this.props.editTodo(this.state.todo);
            this.props.dispatch({type: 'EDIT_TODO'});
            this.setState({
                editMode: !this.state.editMode
            });
            //console.log(this.state.todo);
        }
    }

    deleteTodo = (e) => {
        this.props.deleteTodo(this.state.todo);
        this.props.dispatch({type: 'DELETE_TODO'});
    }
    render(){
        let { editMode, todo } = this.state;
        const { counter, editTodo } = this.props;
        
        return(
            <li className="list-group-item">
                <div className="todo">{counter}. {!editMode ? todo.content : <><form onSubmit={this.edit}><input type="text" value={todo.content} onChange={this.changeTodo}/> <input type="submit" value="edit"/></form></> } </div>
                
                <div className="icons">
                    <FontAwesomeIcon className="edit" icon="pencil-alt" onClick={this.editTodo}/>
                    <FontAwesomeIcon className="delete" icon="trash" onClick={this.deleteTodo} />
                </div>
            </li>
        )
    }
}

function mapState(state){
    return{
        someTodo: state.todos
    }
}

export default connect(mapState)(singleTodo);