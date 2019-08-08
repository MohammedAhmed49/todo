import React from 'react';

const singleTodo = (props) => {

    const { todo } = props;
    
    return(
        <li className="list-group-item">
            {todo.id}. {todo.content}
        </li>
    )
}

export default singleTodo;