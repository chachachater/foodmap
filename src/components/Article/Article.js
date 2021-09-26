import React from "react";
import { UserAllArticle } from "./ArticleStyle";
import FilterBar from "./ArticleFilter";
import ArticleInfo from "./ArticleInfo";

function Article() {
  return (
    <UserAllArticle>
      <FilterBar />
      <ArticleInfo />
    </UserAllArticle>
  );
}

export default Article;
