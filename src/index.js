import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './todos/store/Store';

const render = () => ReactDOM.render(<App {...store.getState()}/>, document.getElementById('root'));


store.subscribe(render);
render();

registerServiceWorker();
