import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './todos/store/Store';
import Root from "./components/Root";

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'));

registerServiceWorker();
