import TodoList from './TodoList';
import { TODO_ACTIONS, VISABILITY_ACTIONS } from '../actions/index';
import { connect } from "react-redux";

const getVisibleTodos = (todos,
                         filter) => {
    switch (filter) {
        case VISABILITY_ACTIONS.FILTERS.VISIBLE_ALL:
            return todos;
        case VISABILITY_ACTIONS.FILTERS.COMPLETED:
            return todos.filter(todo => todo.completed);
        case VISABILITY_ACTIONS.FILTERS.NOT_COMPLETED:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visabilityFilter
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            dispatch({
                type: TODO_ACTIONS.TOGGLE_TODO,
                id
            })
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;