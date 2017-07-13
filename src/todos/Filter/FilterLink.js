import Link from './Link';
import { connect } from "react-redux";
import { setVisabilityFilter } from "../ActionCreators/setVisabilityFilter";

const mapStateToProps = (state, props) => ({
    active: props.filter === state.visabilityFilter
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick() {
        dispatch(setVisabilityFilter(props.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;