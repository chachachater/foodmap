import React from "react";
import { htmlToReactParser } from "../../utils";
import {
  ArticleContainer,
  ArticleContent,
  ArticleTitle,
  ArticleDesc,
} from "./ArticleStyle";
import ArticleImage from "./ArticleImage"

function ArticleInfo({ postsData, setPage }) {
  return postsData.map((post) => {
    const htmlInput = post.content;
    const reactElement = htmlToReactParser(htmlInput);
    return (
      <ArticleContainer to={`/posts/${post.id}`} key={post.id}>
        <ArticleImage imgSrc={post.Pictures[0].food_picture_url} setPage={setPage} />
        <ArticleContent>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleDesc className="ckeditor-content">{reactElement}</ArticleDesc>
        </ArticleContent>
      </ArticleContainer>
    );
  });
}

export default ArticleInfo;
