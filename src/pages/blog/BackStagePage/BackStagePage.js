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
import { fetchPostsByUserId, fetchDeletePost } from "../../../WebAPI";
import useGetId from "../../../hooks/useGetId";
import useScroll from "../../../hooks/useScroll";
import useLoading from "../../../hooks/useLoading";
import Loading from "../../../components/Loading/Loading";

function BackStagePage() {
  const history = useHistory();
  const { isLoading, setIsLoading } = useLoading();
  const { userId } = useGetId();
  const [postsData, setPostsData] = useState([]);
  const scroll = useScroll();
  const [unpublished, setUnpublished] = useState("false");
  const [postCounts, setPostCounts] = useState("");
  const [offset, setOffset] = useState(0);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);

  const screenHeight = window.screen.availHeight;
  const order = "createdAt";

  useEffect(() => {
    if (isLoading) return;
    if (!userId) return;
    setIsLoading(true);
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
      setIsLoading(false);
      if (!result) return console.log(result.message);
      setPostCounts(result.count);
      setPostsData(result.rows);
    });
  }, [userId]);

  useEffect(() => {
    if (isLoading) return;
    if (!userId) return;
    fetchPostsByUserId(userId, 0, order, unpublished).then((result) => {
      setPostsData(result.rows);
      setOffset(0);
    });
  }, [unpublished]);

  useEffect(() => {
    if (offset === 0) return;
    fetchPostsByUserId(userId, offset, order, unpublished).then((result) => {
      if (!result) return setIsLoading(false);
      setPostsData(postsData.concat(result.rows));
      setIsLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (isLoading) return;
    if (clientHeight - scroll.y - screenHeight / 2 >= screenHeight / 2) return;
    if (postCounts > offset) {
      setIsLoading(true);
      setOffset(offset + 5);
    }
  }, [scroll]);

  useEffect(() => {
    setClientHeight(document.body.clientHeight);
  }, [postsData]);

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
      fetchPostsByUserId(userId, 0, order, unpublished).then((result) => {
        setPostsData(result.rows);
        setOffset(0);
      });
    });
  };

  const toEditPage = (id) => () => history.push(`/edit/${id}`);

  return (
    <Wrapper>
      <Navbar />
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
        {postsData &&
          postsData.map((post, index) => (
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

export default BackStagePage;
