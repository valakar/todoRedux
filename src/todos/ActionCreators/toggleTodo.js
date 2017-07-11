import { TODO_ACTIONS } from "../actions/todo";

export const toggleTodo = (id) => {
    return {
        type: TODO_ACTIONS.TOGGLE_TODO,
        id
    }};