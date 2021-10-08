/* eslint-disable */
import { Navbar } from "../../../components/Navbar";
import { useHistory } from "react-router-dom";
import { Wrapper } from "../../../constants/globalStyle";
import React, { useState, useEffect } from "react";
import {
  BackStageWrapper,
  BackStageTitle,
  Filter,
  Publish,
  Private,
} from "./BackStagStyled";
import BackStageArticle from "./BackStagArticle";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer";
import { fetchPostsByUserId, fetchDeletePost } from "../../../WebAPI";
import useScroll from "../../../hooks/useScroll";
import useLoading from "../../../hooks/useLoading";
import Loading from "../../../components/Loading/Loading";

export default function BackStagePage() {
  const history = useHistory();
  const userState = useSelector(selectUser);
  if (!userState.result) {
    alert("Please login");
    history.push("/home");
    return null;
  }
  const { isLoading, setIsLoading } = useLoading();
  const { userId } = userState.result.data;
  const [posts, setPosts] = useState([]);
  const [userImgs, setUserImgs] = useState([]);
  const [isPublished, setIsPublished] = useState(true);
  const [postState, setPostState] = useState("published");
  const order = "createdAt";
  const offset = 0;

  useEffect(() => {
    setIsLoading(true);
    fetchPostsByUserId(userId, offset, order).then((result) => {
      setIsLoading(false);
      if (!result) {
        console.log(result.message);
        return;
      }

      const { posts, images } = result;
      //console.log(result)
      setPosts(posts);
      setUserImgs(images);
    });
  }, [userId]);

  const handlePublishValue = () => {
    if (postState === "unPublished") {
      setIsPublished((isPublished) => !isPublished);
    }
    setPostState("published");
  };

  const handleUnPublishValue = () => {
    if (postState === "published") {
      setIsPublished((isPublished) => !isPublished);
    }
    setPostState("unPublished");
  };

  const handleDelete = (id) => {
    fetchDeletePost(id).then(() => {
      fetchPostsByUserId(userId, order).then((userPost) => {
        if (!userPost) {
          console.log(userPost.message);
          return;
        }

        const { posts, images } = userPost;

        setPosts(posts);
        setUserImgs(images);
      });
    });
  };
  const toEditPage = (id) => () => history.push(`/edit/${id}`);

  return (
    <Wrapper>
      <Navbar userId={userId} />
      {isLoading && <Loading />}
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
                toEditPage={toEditPage(post.id)}
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
                toEditPage={toEditPage(post.id)}
              />
            ))}
      </BackStageWrapper>
    </Wrapper>
  );
}
