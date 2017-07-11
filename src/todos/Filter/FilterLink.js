import React, { Component } from 'react';
import Link from './Link';
import { VISABILITY_ACTIONS } from '../actions/visabilityFilter';
import PropTypes from 'prop-types';

class FilterLink extends Component {
    componentDidMount() {
        const { store } = this.context;
        console.log('FilterLink componentDidMount');
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        console.log('FilterLink componentWillUnmount');
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
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

FilterLink.contextTypes = {
    store: PropTypes.object
};

export default FilterLink;