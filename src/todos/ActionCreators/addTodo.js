import { TODO_ACTIONS } from "../actions/todo";

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        id: nextTodoId++,
        text
    }
};