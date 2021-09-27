import React from "react";
import {
  FilterOptionsContainer,
  FilterOption,
  FilterContainer,
  FilterTitle,
} from "./ArticleStyle";

function Filters() {
  return (
    <FilterOptionsContainer>
      <FilterOption active>最新排序</FilterOption>
      <FilterOption>熱門排序</FilterOption>
    </FilterOptionsContainer>
  );
}

function FilterBar() {
  return (
    <FilterContainer>
      <FilterTitle>最新文章</FilterTitle>
      <Filters />
    </FilterContainer>
  );
}

export default FilterBar;
