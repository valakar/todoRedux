import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { TODO_ACTIONS } from './todos/actions/todo';
import { VISABILITY_ACTIONS } from './todos/actions/visabilityFilter';
import AddTodo from './todos/AddTodo';
import Filter from './todos/Filter';
import store from './todos/store/Store';
import Todos from './todos/Todos';

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
class App extends Component {
    render() {
        const {
            todos,
            visabilityFilter
        } = this.props;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React Redux Todo list</h2>
                </div>

                <AddTodo onAddClick={text => {
                    store.dispatch({
                        type: TODO_ACTIONS.ADD_TODO,
                        id: nextTodoId++,
                        text
                    });
                }}/>

                <Todos todos={getVisibleTodos(
                    todos,
                    visabilityFilter
                )}
                       onTodoClick={id => {
                           store.dispatch({
                               type: TODO_ACTIONS.TOGGLE_TODO,
                               id
                           })
                       }}>
                </Todos>

                <Filter currentFilter={visabilityFilter}
                        onFilterClick={filter => {
                            store.dispatch({
                                type: VISABILITY_ACTIONS.SET_VISABILITY_FILTER,
                                filter
                            });
                        }}/>
            </div>
        );
    }
}

export default App;