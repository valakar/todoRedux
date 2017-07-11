import Link from './Link';
import { VISABILITY_ACTIONS } from '../actions/visabilityFilter';
import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visabilityFilter
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () =>
            dispatch({
                type: VISABILITY_ACTIONS.SET_VISABILITY_FILTER,
                filter: props.filter
            })
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;