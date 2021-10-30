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
import useLoading from "../../../hooks/useLoading";
import Loading from "../../../components/Loading/Loading";

function BackStagePage() {
  const history = useHistory();
  const { isLoading, setIsLoading } = useLoading();
  const { userId } = useGetId();
  const [postsData, setPostsData] = useState([]);
  const [unpublished, setUnpublished] = useState("false");
  const order = "createdAt";
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (isLoading) return;
    if (!userId) return;
    setIsLoading(true);
    fetchPostsByUserId(userId, 0, order, unpublished).then((result) => {
      setIsLoading(false);
      if (!result) return console.log(result.message);
      setPostsData(result.rows);
    });
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    setPage(0);
    fetchPostsByUserId(userId, 0, order, unpublished).then((result) => {
      if (!result) return console.log(result.message);
      setPostsData(result.rows);
    });
  }, [unpublished]);

  useEffect(() => {
    if (page === 0) return;
    if (page % 5 !== 0) return;
    fetchPostsByUserId(userId, page, order, unpublished).then((result) => {
      if (!result) return setIsLoading(false);
      setPostsData((prev) => [...new Set([...prev, ...result.rows])]);
    });
  }, [page]);

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
        setPage(0);
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
          postsData.map((post) => (
            <BackStageArticle
              key={post.id}
              userPost={post}
              image={post.Pictures[0].food_picture_url}
              onDelete={handleDelete}
              toEditPage={toEditPage(post.id)}
              setPage={setPage}
            />
          ))}
      </BackStageWrapper>
    </Wrapper>
  );
}

export default BackStagePage;
