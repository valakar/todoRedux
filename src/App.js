import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Todo from './todos/Todo';
import store from './todos/store/Store';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React Redux Todo list</h2>
                </div>
                <Todo {...store.getState()}/>
            </div>
        );
    }
}

export default App;
