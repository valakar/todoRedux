import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { TODO_ACTIONS } from './todos/actions/todo';
import AddTodo from './todos/AddTodo';
import Filter from './todos/Filter/Filter';
import store from './todos/store/Store';
import VisibleTodoList from './todos/VisibleTodoList';

let nextTodoId = 0;
class App extends Component {
    render() {
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

                <VisibleTodoList/>

                <Filter />
            </div>
        );
    }
}

export default App;