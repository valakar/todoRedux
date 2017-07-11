import React, { Component } from 'react';
import TodoList from './TodoList';
import { TODO_ACTIONS, VISABILITY_ACTIONS } from '../actions/index';
import PropTypes from 'prop-types';

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

class VisibleTodoList extends Component {
    componentDidMount() {
        const { store } = this.context;
        console.log('FilterLink componentDidMount');
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        console.log('FilterLink componentWillUnmount');
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;

        const {
            visabilityFilter,
            todos
        } = store.getState();

        return (
            <TodoList todos={getVisibleTodos(
                todos,
                visabilityFilter
            )}
                      onTodoClick={id => {
                          store.dispatch({
                              type: TODO_ACTIONS.TOGGLE_TODO,
                              id
                          })
                      }}>
            </TodoList>
        );
    }
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
};

export default VisibleTodoList;