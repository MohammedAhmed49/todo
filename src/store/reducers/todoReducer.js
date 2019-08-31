let initialState = {
    todos: [
        {id: 1, content: 'Todo item 1', done: false},
        {id: 2, content: 'Todo item 2', done: false},
        {id: 3, content: 'Todo item 3', done: false},
        {id: 4, content: 'Todo item 4', done: false},
        {id: 5, content: 'Todo item 5', done: false}
    ]
}

const todoReducer = (state = initialState, action) => {
    console.log('todo reducer', state, action);
    return state;
}

export default todoReducer