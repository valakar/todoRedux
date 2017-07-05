import { TODO_ACTIONS } from '../actions';

export const todo = (state, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return {
                id: action.id,
                text: action.text
            };
        case TODO_ACTIONS.REMOVE_TODO:
            return state.id !== action.id;
        case TODO_ACTIONS.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};
