import React, { Component } from 'react';
import store from './store/Store';

let nextTodoId = 0;
class Todo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref={node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++,
                        completed: false
                    });
                    this.input.value = '';
                }}>add todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}
                        onClick={() => {
                            store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: todo.id
                            })
                        }}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                            : {todo.completed}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Todo;