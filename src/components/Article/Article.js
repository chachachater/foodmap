import React from "react";
import { UserAllArticle } from "./ArticleStyle";
import FilterBar from "./ArticleFilter";
import ArticleInfo from "./ArticleInfo";
import PropTypes from "prop-types";

function Article({ postsData, setFilter }) {
  return (
    <UserAllArticle>
      {postsData.length ? <FilterBar setFilter={setFilter} /> : ""}
      <ArticleInfo postsData={postsData} />
    </UserAllArticle>
  );
}
Article.propTypes = {
  postsData: PropTypes.array,
  setFilter: PropTypes.func,
};
export default Article;