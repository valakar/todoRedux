import { createStore } from 'redux';
import { reducer } from "../reducers";
import { loadState, saveState } from "../data/localStorage";

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(() => saveState({
    todos: store.getState().todos
}));

export default store;
