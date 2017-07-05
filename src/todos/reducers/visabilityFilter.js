import { VISABILITY_ACTIONS } from '../actions';

export const visabilityFilter = (state = VISABILITY_ACTIONS.FILTERS.VISIBLE_ALL, action) => {
    switch (action.type) {
        case VISABILITY_ACTIONS.SET_VISABILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};