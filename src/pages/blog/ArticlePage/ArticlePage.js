import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { htmlToReactParser } from "../../../utils";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import {
  PostWrapper,
  PostContainer,
  PostAuthor,
  AuthorImg,
  AuthorName,
  PostTitle,
  PostContent,
  PostImg,
} from "./ArticlePageStyle";
import ImageViewer from "../../../components/ImageViewer";
import { fetchPostByPostId, fetchUserData } from "../../../WebAPI";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import useLoading from "../../../hooks/useLoading";
import Error from "../../../components/Error/Error";
import useError from "../../../hooks/useError";
import useGetId from "../../../hooks/useGetId";
import "./ckeditorStyle.css";

function Post({ post, user }) {
  if (!post) return null;
  if (!post.Pictures) return null;
  let arr = [];
  post.Pictures.map((post) => {
    let src = post.food_picture_url;
    arr.push({ src });
  });
  const htmlInput = post.content;
  const reactElement = htmlToReactParser(htmlInput);
  return (
    <PostWrapper>
      <PostContainer>
        <PostAuthor>
          <AuthorImg $img={user && user.picture_url}></AuthorImg>
          <AuthorName to={`/user/${post.user_id}`}>
            {user && user.nickname}
          </AuthorName>
        </PostAuthor>
        <PostTitle>{post && post.title}</PostTitle>
        <PostContent className="ckeditor-content">
          {post && reactElement}
        </PostContent>
        <PostImg>
          <ImageViewer photos={arr} />
        </PostImg>
      </PostContainer>
    </PostWrapper>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object,
};

function ArticlePage() {
  const { userId } = useGetId();
  const { id } = useParams();
  const [post, setPost] = useState();
  const [user, setUser] = useState();
  const { isLoading, setIsLoading } = useLoading();
  const { isError, setIsError } = useError();

  useEffect(() => {
    setIsLoading(true);
    fetchPostByPostId(id, userId).then((post) => {
      setIsLoading(false);

      // if (!post.post) return setIsError(true);
      // setPost(post);

      // const userId = post.post.user_id;

      if (!post) {
        console.log(post.message);
        return;
      }
      setPost(post);
      const userId = post.user_id;

      fetchUserData(userId).then((user) => {
        if (!user) {
          console.log(user.message);
          return;
        }
        setUser(user.data);
      });
    });
  }, [userId]);
  return (
    <Wrapper>
      <Navbar />
      {isLoading && <Loading />}
      {isError && <Error />}
      <Post post={post} user={user} />
    </Wrapper>
  );
}

export default ArticlePage;
