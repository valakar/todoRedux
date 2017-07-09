import React, { Component } from 'react';
import store from '../store/Store';
import Link from './Link';
import { VISABILITY_ACTIONS } from '../actions/visabilityFilter';

class FilterLink extends Component {
    componentDidMount() {
        console.log('FilterLink componentDidMount');
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        console.log('FilterLink componentWillUnmount');
        this.unsubscribe();
    }

    render() {
        const { filter, children } = this.props;
        const { visabilityFilter } = store.getState();

        return (
            <Link active={filter === visabilityFilter}
                  onClick={() =>
                      store.dispatch({
                          type: VISABILITY_ACTIONS.SET_VISABILITY_FILTER,
                          filter
                      })
                  }>
                {children}
            </Link>
        );
    }
}

export default FilterLink;