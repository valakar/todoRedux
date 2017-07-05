import React, { Component } from 'react';
import { VISABILITY_ACTIONS } from './actions/visabilityFilter';
import FilterLink from './FilterLink';

class Filter extends Component {
    render() {
        const {
            visabilityFilter,
            onFilterClick
        } = this.props;

        return (
            <p>
                Show: {' '}
                <FilterLink
                    filter={VISABILITY_ACTIONS.FILTERS.VISIBLE_ALL}
                    currentFilter={visabilityFilter}
                    onClick={onFilterClick}>
                    All
                </FilterLink> {' '}
                <FilterLink
                    filter={VISABILITY_ACTIONS.FILTERS.COMPLETED}
                    currentFilter={visabilityFilter}
                    onClick={onFilterClick}>
                    Completed
                </FilterLink> {' '}
                <FilterLink
                    filter={VISABILITY_ACTIONS.FILTERS.NOT_COMPLETED}
                    currentFilter={visabilityFilter}
                    onClick={onFilterClick}>
                    Active
                </FilterLink>
            </p>
        );
    }
}

export default Filter;