import React from 'react';
import { TODO_ACTIONS } from './actions/todo';
import { connect } from "react-redux";

let nextTodoId = 0;

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                dispatch({
                    type: TODO_ACTIONS.ADD_TODO,
                    id: nextTodoId++,
                    text: input.value
                });
                input.value = '';
            }}>add todo
            </button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;