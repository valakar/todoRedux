import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    render() {
        const {
            todos,
            onTodoClick
        } = this.props;

        return (
            <div>
                {todos.map(todo =>
                    <Todo key={todo.id}
                          onClick={() => onTodoClick(todo.id)}
                          {...todo}/>
                )}
            </div>
        );
    }
}

export default Todos;