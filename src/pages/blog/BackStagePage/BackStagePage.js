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
import useParseData from "../../../hooks/useParseData";
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
  const { parseResult, setParseResult, parseData } = useParseData();
  const scroll = useScroll();
  const [posts, setPosts] = useState([]);
  const [userImgs, setUserImgs] = useState([]);
  const [unpublished, setUnpublished] = useState("false");
  const [postCounts, setPostCounts] = useState("");
  const [offset, setOffset] = useState(0);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const screenHeight = window.screen.availHeight;
  const order = "createdAt";

  useEffect(() => {
    setIsLoading(true);
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
      setIsLoading(false);
      if (!result) return console.log(result.message);

      // const { posts, images, postCounts } = result;

      // setPosts(posts);
      // setUserImgs(images);
      // setPostCounts(postCounts)
      setPostCounts(result.postCounts);
      //console.log(result);
      // 這邊等後端改成 left join 會更好處理
      setParseResult(parseData(result));
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
      setIsLoading(false);
      if (!result) return console.log(result.message);

      setParseResult(parseData(result));
      setOffset(0);
    });
  }, [unpublished]);

  useEffect(() => {
    if (offset === 0) return;
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
      console.log(result);
      setParseResult(parseResult.concat(parseData(result)));
      setIsLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (isLoading) return;
    if (clientHeight - scroll.y - screenHeight / 2 >= screenHeight / 2) return;
    if (postCounts > offset) {
      setIsLoading(true);
      setOffset(offset + 5);
      console.log(offset);
    }
  }, [scroll]);

  useEffect(() => {
    setClientHeight(document.body.clientHeight);
  }, [parseResult]);

  const handlePublishValue = () => {
    if (unpublished === "false") return;
    setUnpublished("false");
  };

  const handleUnPublishValue = () => {
    if (unpublished === "true") return;
    setUnpublished("true");
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
        {parseResult.map((post, index) => (
          <BackStageArticle
            key={index}
            userPost={post}
            image={post.Pictures[0].food_picture_url}
            onDelete={handleDelete}
            toEditPage={toEditPage(post.id)}
          />
        ))}
      </BackStageWrapper>
    </Wrapper>
  );
}
