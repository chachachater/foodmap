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
  const [postState, setPostState] = useState("published");
  const [unpublished, setUnpublished] = useState("false");
  const [offset, setOffset] = useState(0);
  const order = "createdAt";

  useEffect(() => {
    setIsLoading(true);
    console.log(unpublished);
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
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
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log(unpublished);
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
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
  }, [unpublished]);

  const handlePublishValue = () => {
    if (postState === "unPublished") {
      setUnpublished("false");
    }
    setPostState("published");
  };

  const handleUnPublishValue = () => {
    if (postState === "published") {
      setUnpublished("true");
    }
    console.log(unpublished);
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
          {unpublished === "true" ? (
            <>
              <Publish onClick={handlePublishValue}>已公開</Publish>
              <Private $active onClick={handleUnPublishValue}>
                未公開
              </Private>
            </>
          ) : (
            <>
              <Publish $active onClick={handlePublishValue}>
                已公開
              </Publish>
              <Private onClick={handleUnPublishValue}>未公開</Private>
            </>
          )}
        </Filter>
        {posts.map((post) => (
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
