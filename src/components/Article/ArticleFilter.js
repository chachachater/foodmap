import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FilterOptionsContainer,
  FilterOption,
  FilterContainer,
  FilterTitle,
} from "./ArticleStyle";

function Filters({ setFilter }) {
  const [active, setActive] = useState("createdAt");
  return (
    <FilterOptionsContainer>
      <FilterOption
        active={active === "createdAt" ? true : false}
        onClick={() => {
          setFilter("createdAt");
          setActive("createdAt");
        }}
      >
        最新排序
      </FilterOption>
      <FilterOption
        active={active === "views" ? true : false}
        onClick={() => {
          setFilter("views");
          setActive("views");
        }}
      >
        熱門排序
      </FilterOption>
    </FilterOptionsContainer>
  );
}

function FilterBar({ setFilter }) {
  return (
    <FilterContainer>
      <FilterTitle>最新文章</FilterTitle>
      <Filters setFilter={setFilter} />
    </FilterContainer>
  );
}
FilterBar.propTypes = {
  setFilter: PropTypes.func,
};
Filters.propTypes = {
  setFilter: PropTypes.func,
};
export default FilterBar;
