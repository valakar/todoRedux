import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import AddTodo from './todos/AddTodo';
import Filter from './todos/Filter/Filter';
import VisibleTodoList from './todos/VisibleTodoList/VisibleTodoList';

class App extends Component {
    render() {
        const {
            filter
        } = this.props.match.params;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React Redux Todo list</h2>
                </div>

                <AddTodo />
                <VisibleTodoList filter={filter || 'all'}/>
                <Filter />
            </div>
        );
    }
}

export default App;