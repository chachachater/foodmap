/* eslint-disable */
import React from "react";
import { htmlToReactParser } from "../../utils";
import {
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleDesc,
} from "./ArticleStyle";

function ArticleInfo({ postsData }) {
  return  postsData.map((post, index) => {
    const htmlInput = post.content;
    const reactElement = htmlToReactParser(htmlInput);
    return (
      <ArticleContainer to={`/posts/${post.id}`} key={index}>
        <ArticleImage image={post.Pictures[0].food_picture_url} />
        <ArticleContent>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleDesc>{reactElement}</ArticleDesc>
        </ArticleContent>
      </ArticleContainer>
    );
  });
}

export default ArticleInfo;
