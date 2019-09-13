let initialState = {
    todos: [
        {id: 1, content: 'Todo item 1', done: false},
        {id: 2, content: 'Todo item 2', done: false},
        {id: 3, content: 'Todo item 3', done: false},
        {id: 4, content: 'Todo item 4', done: false},
        {id: 5, content: 'Todo item 5', done: false}
    ],
    latestID: null
}

const len = Object.keys(initialState.todos).length;
initialState.latestID = initialState.todos[len-1].id + 1;

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            let newTodo = {
                ...action.todo,
                id: state.latestID
            }
            let newState = {
                ...state,
                latestID: state.latestID + 1,
                todos: [
                    ...state.todos,
                    newTodo
                ]
            }
            return newState;
        case 'DELETE_TODO':
            let newTodos = state.todos.filter((item) => {
                return item.id != action.todo.id
            });
            let newState2 = {
                ...state,
                todos: [
                    ...newTodos
                ]
            }
            return newState2;
        case 'EDIT_TODO':
            let editedTodos = state.todos.map((item) => {
                if(item.id === action.todo.id){
                    return{
                        ...item,
                        content: action.todo.content
                    }
                } else {
                    return item;
                }
            });
            let editedState = {
                ...state,
                todos: [
                    ...editedTodos
                ]
            }
            return editedState;
        default:
            return state;
    }
    
}

export default todoReducer;