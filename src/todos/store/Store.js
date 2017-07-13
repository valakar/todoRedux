import { createStore } from 'redux';
import { reducer } from "../reducers";
import { loadState, saveState } from "../data/localStorage";
import { throttle } from "lodash";

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(throttle(() => saveState({
    todos: store.getState().todos
})), 1000);

export default store;
