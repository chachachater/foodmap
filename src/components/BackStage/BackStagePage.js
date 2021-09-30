import { Navbar } from "../Navbar";
import { Wrapper } from "../../constants/globalStyle";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BackStageWrapper,
  BackStageTitle,
  Filter,
  Publish,
  Private,
  BackStageArticle,
} from "./BackStagStyled";
import { FecthGetUserPosts } from "../../webAPI/ArticleAPI";


export default function BackStagePage() {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [userImgs, setUserImgs] = useState([]);

  useEffect(() => {
    FecthGetUserPosts(1).then((userPost) => {
      if (!userPost) {
        console.log(userPost.message);
        return;
      }
      setUserPosts(userPost.posts);
      setUserImgs(userPost.images);
    });
  }, [userId]);
  console.log(userPosts);

  return (
    <Wrapper>
      <Navbar />
      <BackStageWrapper>
        <BackStageTitle>你的文章</BackStageTitle>
        <Filter>
          <Publish active>已公開</Publish>
          <Private>未公開</Private>
        </Filter>
        {userPosts.map((userPost) => (
          userImgs.map((userImg) => (
            userPost.id === userImg.postId && (
              <BackStageArticle key={userPost.id} userPost={userPost} userImg={userImg.link} />
            )
          ))
        ))}
      </BackStageWrapper>
    </Wrapper>
  );
}
