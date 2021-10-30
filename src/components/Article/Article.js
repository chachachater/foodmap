import React from "react";
import { UserAllArticle } from "./ArticleStyle";
import FilterBar from "./ArticleFilter";
import ArticleInfo from "./ArticleInfo";
import PropTypes from "prop-types";

function Article({ postsData, setPage }) {
  return (
    <UserAllArticle>
      {postsData.length ? <FilterBar /> : ""}
      <ArticleInfo setPage={setPage} postsData={postsData} />
    </UserAllArticle>
  );
}
Article.propTypes = {
  postsData: PropTypes.array,
  setFilter: PropTypes.func,
  setPage: PropTypes.func,
  profilePage: PropTypes.bool,
};
export default Article;
