import { combineReducers } from 'redux';
import { todos } from './todos';
import { visabilityFilter } from './visabilityFilter';

export const reducer = combineReducers({
    todos, visabilityFilter
});