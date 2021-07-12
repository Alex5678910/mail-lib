let nextTodoId = 0;

export const addTodo = content => ({
    type: 'ADD_TODO',
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    payload: {
        id
    }
});

export const setFilter = terFilter => ({
    type: 'SET_FILTER',
    payload: {
        terFilter
    }
});

export const delItem = id => ({
    type: 'DEL_ITEM',
    payload: {
        id
    }
});

export const delItemTwo = id => ({
    type: 'DEL_ITEM_TWO',
    payload: {
        id
    }
});

export const handlerChange = e => ({
    type: 'H_CHANGE',
    payload: {
        e
    }
});