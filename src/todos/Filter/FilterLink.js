import { VISABILITY_ACTIONS } from "../actions/visabilityFilter";
import { NavLink } from "react-router-dom";
import * as React from "react";

const FilterLink = ({ filter, children }) => {

    return (<NavLink exact strict to={filter === VISABILITY_ACTIONS.ALL ? '/' : `/${filter}`}
          activeStyle={{
              textDecoration: 'none',
              color: 'black'
          }}>
        {children}
    </NavLink>);
};
export default FilterLink;