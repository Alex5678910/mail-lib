import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, delItem } from "../redux/actions";
import { DeleteFilled } from '@ant-design/icons';

const Todo = ({ todo, toggleTodo, i, delItem}) => (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        { i + 1 } {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
            className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
      {todo.content}
    </span>
    </li>
        <div style={{marginRight: '50px', cursor: 'pointer'}} onClick={() => delItem(todo.id)}>
        <DeleteFilled twoToneColor="#eb2f96"/>
        </div>
    </div>
);

// export default Todo;
export default connect(null,{ toggleTodo, delItem })(Todo);
