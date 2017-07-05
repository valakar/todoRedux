import React, { Component } from 'react';
import { TODO_ACTIONS } from './actions/todo';
import { VISABILITY_ACTIONS } from './actions/visabilityFilter';
import FilterLink from './FilterLink';
import store from './store/Store';

const getVisibleTodos = (todos,
                         filter) => {
    switch (filter) {
        case VISABILITY_ACTIONS.FILTERS.VISIBLE_ALL:
            return todos;
        case VISABILITY_ACTIONS.FILTERS.COMPLETED:
            return todos.filter(todo => todo.completed);
        case VISABILITY_ACTIONS.FILTERS.NOT_COMPLETED:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
};

let nextTodoId = 0;
class Todo extends Component {
    render() {
        const {
            todos,
            visabilityFilter
        } = this.props;

        let visibleTodos = getVisibleTodos(
            todos,
            visabilityFilter
        );
        console.log(visibleTodos);
        return (
            <div>
                <input type="text" ref={node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: TODO_ACTIONS.ADD_TODO,
                        text: this.input.value,
                        id: nextTodoId++,
                        completed: false
                    });
                    this.input.value = '';
                }}>add todo
                </button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: TODO_ACTIONS.TOGGLE_TODO,
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

                <p>
                    Show: {' '}
                    <FilterLink
                        filter={VISABILITY_ACTIONS.FILTERS.VISIBLE_ALL}
                        currentFilter={visabilityFilter}>
                        All
                    </FilterLink> {' '}
                    <FilterLink
                        filter={VISABILITY_ACTIONS.FILTERS.COMPLETED}
                        currentFilter={visabilityFilter}>
                        Completed
                    </FilterLink> {' '}
                    <FilterLink
                        filter={VISABILITY_ACTIONS.FILTERS.NOT_COMPLETED}
                        currentFilter={visabilityFilter}>
                        Active
                    </FilterLink>
                </p>
            </div>
        );
    }
}

export default Todo;