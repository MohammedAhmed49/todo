const ADD = 'ADD_TODO';
const EDIT = 'EDIT_TODO';
const DELETE = 'DELETE_TODO';

export const addTodoAction = (todo) => {
    return { type: ADD, todo: todo }
}

export const editTodoAction = (todo) => {
    return { type: EDIT, todo: todo }
}

export const deleteTodoAction = (todo) => {
    return { type: DELETE, todo: todo }
}