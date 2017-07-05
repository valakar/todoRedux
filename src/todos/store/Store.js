import { combineReducers, createStore } from 'redux';
import { todos } from '../reducers/todos';
import { visabilityFilter } from '../reducers/visabilityFilter';


const store = createStore(combineReducers({
    todos, visabilityFilter
}));

export default store;
