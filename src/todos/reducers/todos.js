import { TODO_ACTIONS } from '../actions';
import { todo } from './todo';

export const todos = (state = [], action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TODO_ACTIONS.REMOVE_TODO:
            return state.filter(t => todo(t, action));
        case TODO_ACTIONS.TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};