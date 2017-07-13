import { TODO_ACTIONS } from "../actions/todo";

export const toggleTodo = (id) => ({
    type: TODO_ACTIONS.TOGGLE_TODO,
    id
});