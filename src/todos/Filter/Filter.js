import React, { Component } from 'react';
import { VISABILITY_ACTIONS } from '../actions/visabilityFilter';
import FilterLink from './FilterLink';

class Filter extends Component {
    render() {
        return (
            <p>
                Show: {' '}
                <FilterLink
                    filter={VISABILITY_ACTIONS.ALL}>
                    All
                </FilterLink> {' '}
                <FilterLink
                    filter={VISABILITY_ACTIONS.COMPLETED}>
                    Completed
                </FilterLink> {' '}
                <FilterLink
                    filter={VISABILITY_ACTIONS.ACTIVE}>
                    Active
                </FilterLink>
            </p>
        );
    }
}

export default Filter;