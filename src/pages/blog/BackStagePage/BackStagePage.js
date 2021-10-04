/* eslint-disable */
import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import React, { useState, useEffect } from "react";
import {
  BackStageWrapper,
  BackStageTitle,
  Filter,
  Publish,
  Private,
  BackStageArticle,
} from "./BackStagStyled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer";
import { FecthGetUserPosts, fetchDletePost } from "../../../webAPI/ArticleAPI";

export default function BackStagePage() {
  const [posts, setPosts] = useState([]);
  const [userImgs, setUserImgs] = useState([]);
  const [isPublished, setIsPublished] = useState(true);
  const [postState, setPostState] = useState("published");

  const userState = useSelector(selectUser);
  const { userId } = userState.result.data;
  const order = 'createdAt'

  useEffect(() => {
    FecthGetUserPosts(userId, order).then((userPost) => {
      if (!userPost) {
        console.log(userPost.message);
        return;
      }

      const { posts, images } = userPost;

      setPosts(posts);
      setUserImgs(images);
    });
  }, [userId]);

  const handlePublishValue = () => {
    setPostState("published");
    setIsPublished((isPublished) => !isPublished);
  };

  const handleUnPublishValue = () => {
    setPostState("unPublished");
    setIsPublished((isPublished) => !isPublished);
  }

  const handleDelete = (id) => {
    fetchDletePost(id)
  };

  return (
    <Wrapper>
      <Navbar userId={userId} />
      <BackStageWrapper>
        <BackStageTitle>你的文章</BackStageTitle>
        <Filter>
          {isPublished && (
            <Publish $active onClick={handlePublishValue}>
              已公開
            </Publish>
          )}
          {isPublished && (
            <Private onClick={handleUnPublishValue}>未公開</Private>
          )}
          {!isPublished && (
            <Publish onClick={handlePublishValue}>已公開</Publish>
          )}
          {!isPublished && (
            <Private $active onClick={handleUnPublishValue}>
              未公開
            </Private>
          )}
        </Filter>
        {postState === "published" &&
          posts &&
          posts
            .filter((post) => post.is_published === true)
            .map((post) => (
              <BackStageArticle
                key={post.id}
                userPost={post}
                userImgs={userImgs}
                onDelete={handleDelete}
              />
            ))}
        {postState === "unPublished" &&
          posts &&
          posts
            .filter((post) => post.is_published === false)
            .map((post) => (
              <BackStageArticle
                key={post.id}
                userPost={post}
                userImgs={userImgs}
                onDelete={handleDelete}
              />
            ))}
      </BackStageWrapper>
    </Wrapper>
  );
}
