import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import '../../styles.css'
import {Provider} from "react-redux";
import store from "./redux/store";

export default function TodoAppMain() {
    return (
        <Provider store={store}>
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
        </Provider>
    );
}