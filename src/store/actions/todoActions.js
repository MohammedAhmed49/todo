const ADD = 'ADD_TODO';
const EDIT = 'EDIT_TODO';
const DELETE = 'DELETE_TODO';

export const addTodo = (todo) => {
    return { type: ADD, todo: todo }
}

export const editTodo = (todo) => {
    return { type: EDIT, todo: todo }
}

export const deleteTodo = (todo) => {
    return { type: DELETE, todo: todo }
}