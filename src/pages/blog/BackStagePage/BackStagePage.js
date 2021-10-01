import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
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
//import { useSelector } from "react-redux";
//import { selectUser } from "../../../redux/reducers/userReducer";
import { FecthGetUserPosts } from "../../../webAPI/ArticleAPI";

export default function BackStagePage() {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [userImgs, setUserImgs] = useState([]);
  //const [isPublished, setIsPublished] = useState(true)

  // const togglePublished = () => {
  //   setIsPublished(isPublished => !isPublished)
  // }

  // const userState = useSelector(selectUser);
  // if (userState.result) {
  //   const { userId } = userState.result.data
  // } else {
  //   const userId = 4
  // }

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

  return (
    <Wrapper>
      <Navbar />
      <BackStageWrapper>
        <BackStageTitle>你的文章</BackStageTitle>
        {/* <Filter>
          {isPublished && <Publish active onClick={togglePublished}>已公開</Publish>}
          {isPublished && <Private onClick={togglePublished}>未公開</Private>}
          {!isPublished && <Publish onClick={togglePublished}>已公開</Publish>}
          {!isPublished && <Private active onClick={togglePublished}>未公開</Private>}
        </Filter> */}
        <Filter>
          <Publish active>已公開</Publish>
          <Private>未公開</Private>
        </Filter>
        {userPosts.map((userPost) =>
          userImgs.map(
            (userImg) =>
              userPost.id === userImg.postId && (
                <BackStageArticle
                  key={userPost.id}
                  userPost={userPost}
                  userImg={userImg.link}
                />
              )
          )
        )}
      </BackStageWrapper>
    </Wrapper>
  );
}
