/* eslint-disable */
import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import React, { useState } from "react";
import {
  BackStageTitle,
  Filter,
  Publish,
  Private,
  BackStageArticle,
} from "./BackStagStyled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer"

export default function BackStagePage() {
  const [isPublished, setIsPublished] = useState(true)
  const togglePublished = () => {
    setIsPublished(isPublished => !isPublished)
  }

  const userState = useSelector(selectUser);
  if (userState.result) {
    const { userId } = userState.result.data
  } else {
    const userId = 4
  }
  return (
    <Wrapper>
      <Navbar />
      <BackStageTitle>你的文章</BackStageTitle>
      <Filter>
        {isPublished && <Publish active onClick={togglePublished}>已公開</Publish>}
        {isPublished && <Private onClick={togglePublished}>未公開</Private>}
        {!isPublished && <Publish onClick={togglePublished}>已公開</Publish>}
        {!isPublished && <Private active onClick={togglePublished}>未公開</Private>}
      </Filter>
      <BackStageArticle />
      <BackStageArticle />
      <BackStageArticle />
    </Wrapper>
  );
}
