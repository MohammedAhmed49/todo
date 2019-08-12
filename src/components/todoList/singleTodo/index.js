import React from 'react';

const singleTodo = (props) => {

    const { todo,counter } = props;
    
    return(
        <li className="list-group-item">
            {counter}. {todo.content}
        </li>
    )
}

export default singleTodo;