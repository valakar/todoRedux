import { TODO_ACTIONS } from "../actions/todo";

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: TODO_ACTIONS.ADD_TODO,
    id: nextTodoId++,
    text
});