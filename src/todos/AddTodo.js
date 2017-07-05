import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        const {
            onAddClick,
        } = this.props;
        let input;
        return (
            <div>
                <input type="text" ref={node => {
                    input = node;
                }}/>
                <button onClick={() => {
                    onAddClick(input.value);
                    input.value = '';
                }}>add todo
                </button>
            </div>
        );
    }
}

export default AddTodo;