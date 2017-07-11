import Link from './Link';
import { connect } from "react-redux";
import { setVisabilityFilter } from "../ActionCreators/setVisabilityFilter";

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visabilityFilter
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => dispatch(setVisabilityFilter(props.filter))
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;