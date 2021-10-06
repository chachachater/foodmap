/* eslint-disable */
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Parser } from "html-to-react";
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
    const htmlToReactParser = new Parser();
    const reactElement = htmlToReactParser.parse(htmlInput);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

    return (
      <ArticleContainer to={`/posts/${post.id}`} key={index}>
        <ArticleImage image={post.Pictures[0].food_picture_url} />
        <ArticleContent>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleDesc>{reactElement}</ArticleDesc>
          {/* <div>{reactElement}</div> */}
        </ArticleContent>
      </ArticleContainer>
    );
  });
}

export default ArticleInfo;
