import React, { Component } from 'react';
import { TODO_ACTIONS } from './actions/todo';
import store from './store/Store';

let nextTodoId = 0;

class AddTodo extends Component {
    render() {
        let input;
        return (
            <div>
                <input type="text" ref={node => {
                    input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: TODO_ACTIONS.ADD_TODO,
                        id: nextTodoId++,
                        text: input.value
                    });
                    input.value = '';
                }}>add todo
                </button>
            </div>
        );
    }
}

export default AddTodo;