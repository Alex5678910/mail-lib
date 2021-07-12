const VISIBILITY_FILTERS = {
    ALL: "Все",
    COMPLETED: "Закончил",
    INCOMPLETE: "Осталось"
};

export const getTodosState = store => store.todoGreen;

export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
    getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, vFilter) => {
    const allTodos = getTodos(store);
    switch (vFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
