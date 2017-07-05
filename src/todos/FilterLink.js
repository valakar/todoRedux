import React, { Component } from 'react';
import store from './store/Store';
import { VISABILITY_ACTIONS } from './actions/visabilityFilter';

class FilterLink extends Component {
    render() {
        const {
            filter,
            currentFilter,
            children
        } = this.props;

        if (filter === currentFilter) {
            return (<span>{children}</span>)
        }
        return (
            <a href="#"
            onClick={e => {
                e.preventDefault();
                store.dispatch({
                    type: VISABILITY_ACTIONS.SET_VISABILITY_FILTER,
                    filter: filter
                });
            }}>
                {children}
            </a>
        );
    }
}

export default FilterLink;