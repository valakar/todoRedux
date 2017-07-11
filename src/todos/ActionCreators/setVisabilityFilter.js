import { VISABILITY_ACTIONS } from "../actions/visabilityFilter";

export const setVisabilityFilter = (filter) => {
    return {
        type: VISABILITY_ACTIONS.SET_VISABILITY_FILTER,
        filter
    }
};