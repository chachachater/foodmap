import { Navbar } from "../Navbar";
import { Wrapper } from "../../constants/globalStyle";
import React from "react";
import {
  BackStageTitle,
  Filter,
  Publish,
  Private,
  BackStageArticle,
} from "./BackStagStyled";

export default function BackStagePage() {
  return (
    <Wrapper>
      <Navbar />
      <BackStageTitle>你的文章</BackStageTitle>
      <Filter>
        <Publish active>已公開</Publish>
        <Private>未公開</Private>
      </Filter>
      <BackStageArticle />
      <BackStageArticle />
      <BackStageArticle />
    </Wrapper>
  );
}
