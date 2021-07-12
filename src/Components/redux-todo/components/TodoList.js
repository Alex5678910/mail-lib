import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import {handlerChange} from "../redux/actions";

const TodoList = ({ mainT, val, handlerChange}) => (
    <ul className="todo-list">
        {mainT && mainT.length
            ? mainT.map((todo, i) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} i={i}/>;
            })
            : "Дел нету!"}
        <input type="text" placeholder="Фильтрация списка"
                           className={'My-input'} onChange={handlerChange} value={val}/>
    </ul>
);

const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    const mainT = todos.filter(item => {
        return item.content.toLowerCase().indexOf(state.todoGreen.val.toLowerCase()) > -1;
    });
    return {
        mainT,
        val: state.todoGreen.val
    };
};
export default connect(mapStateToProps, {handlerChange})(TodoList);
