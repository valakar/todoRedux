import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import AddTodo from './todos/AddTodo';
import Filter from './todos/Filter/Filter';
import VisibleTodoList from './todos/VisibleTodoList/VisibleTodoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React Redux Todo list</h2>
                </div>

                <AddTodo />
                <VisibleTodoList />
                <Filter />
            </div>
        );
    }
}

export default App;