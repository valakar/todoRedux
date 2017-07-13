import { TODO_ACTIONS } from "../actions/todo";
import { v4 } from "uuid";

export const addTodo = (text) => ({
    type: TODO_ACTIONS.ADD_TODO,
    id: v4(),
    text
});