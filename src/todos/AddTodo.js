import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "./ActionCreators/addTodo";

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>add todo
            </button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;