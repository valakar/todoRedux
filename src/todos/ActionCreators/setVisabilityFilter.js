import { VISABILITY_ACTIONS } from "../actions/visabilityFilter";

export const setVisabilityFilter = (filter) => ({
    type: VISABILITY_ACTIONS.SET_VISABILITY_FILTER,
    filter
});