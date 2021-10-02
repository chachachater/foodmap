import React from "react";
import { useParams } from "react-router-dom";
import {
  FilterOptionsContainer,
  FilterOption,
  FilterContainer,
  FilterTitle,
} from "./ArticleStyle";
import useConfirmUser from "../../hooks/useConfirmUser"

function Filters() {
  const { id } = useParams();
  const { confirmUser } = useConfirmUser(id)
  return (
    <FilterOptionsContainer>
      {!confirmUser && <FilterOption active>最新排序</FilterOption>}
      {confirmUser && <FilterOption active>私人文章</FilterOption>}
      {confirmUser && <FilterOption>公開文章</FilterOption>}
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
