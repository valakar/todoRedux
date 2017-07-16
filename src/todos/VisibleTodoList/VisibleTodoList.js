import TodoList from './TodoList';
import { VISABILITY_ACTIONS } from '../actions/index';
import { connect } from "react-redux";
import { toggleTodo } from "../ActionCreators/toggleTodo";
import { withRouter } from "react-router-dom";

const getVisibleTodos = (todos,
                         filter) => {
    switch (filter) {
        case VISABILITY_ACTIONS.ALL:
            return todos;
        case VISABILITY_ACTIONS.COMPLETED:
            return todos.filter(todo => todo.completed);
        case VISABILITY_ACTIONS.ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(
        state.todos,
        match.params.filter
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;