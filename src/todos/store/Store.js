import { createStore } from 'redux';
import { reducer } from "../reducers";

const persistedState = {
    todos: [{
        id: 0,
        text: 'Hello world',
        completed: false
    }]
};

const store = createStore(reducer, persistedState);

export default store;
