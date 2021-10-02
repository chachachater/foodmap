import React from "react";
import {
  ArticleContainer,
  // ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleDesc,
} from "./ArticleStyle";

function ArticleInfo({ postsData }) {
  return postsData.map((post, index) => {
    return (
      <ArticleContainer to={`posts/${post.id}`} key={index}>
        {/* <ArticleImage image={post.Pictures[0].food_picture_url} /> */}
        <ArticleContent>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleDesc>{post.content}</ArticleDesc>
        </ArticleContent>
      </ArticleContainer>
    );
  });
}

export default ArticleInfo;