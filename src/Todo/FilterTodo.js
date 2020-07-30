import React from "react";
import PropTypes from "prop-types";
import { FILTERS } from "./constants";

export const FilterTodo = ({ setFilter, activeFilter }) => {
  const isActiveFilter = (filter) => filter === activeFilter;

  return (
    <div className="toolbar-todo">
      {Object.keys(FILTERS).map((filter) => (
        <span
          className={isActiveFilter(filter) ? "filter-active" : null}
          key={filter}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

FilterTodo.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
