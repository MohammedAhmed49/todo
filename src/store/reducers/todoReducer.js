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
    switch(action.type){
        case 'ADD_TODO':
            console.log('Todo Added');
            return state;
        case 'DELETE_TODO':
            console.log('Todo Removed', action.todo);
            return state;
        case 'EDIT_TODO':
            console.log('Todo Edited', action.todo);
            return state;
        default:
            return state;
    }
    
}

export default todoReducer