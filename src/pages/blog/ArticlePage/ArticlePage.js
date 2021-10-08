import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer";
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
import useLoading from "../../../hooks/useLoading"

function Post({ post, user }) {
  console.log(post);
  console.log(user);
  if (!post) return null;
  if (!post.images) return null;
  let arr = [];
  post.images.map((post) => {
    let src = post;
    arr.push({ src });
  });
  const htmlInput = post.post.content;
  const reactElement = htmlToReactParser(htmlInput);
  return (
    <PostWrapper>
      <PostContainer>
        <PostAuthor>
          <AuthorImg $img={user && user.picture_url}></AuthorImg>
          <AuthorName to={`/user/${post.post.user_id}`}>{user && user.nickname}</AuthorName>
        </PostAuthor>
        <PostTitle>{post.post && post.post.title}</PostTitle>
        <PostContent>{post.post && reactElement}</PostContent>
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
  const userState = useSelector(selectUser);
  const { id } = useParams();
  const [userId, setUserId] = useState();
  const [post, setPost] = useState();
  const [user, setUser] = useState();
  const { isLoading, setIsLoading } = useLoading()
  
  useEffect(() => {
    if (userState.result) {
      setUserId(userState.result.data.userId);
    }
    setIsLoading(true)
    fetchPostByPostId(id, userId).then((post) => {
      setIsLoading(false)

      if (!post) {
        console.log(post.message);
        return;
      }
      setPost(post);
      const userId = post.post.user_id;

      fetchUserData(userId).then((user) => {
        if (!user) {
          console.log(user.message);
          return;
        }
        setUser(user.data);
      });
    });
  }, [id]);

  return (
    <Wrapper>
      <Navbar />
      {isLoading && <Loading />}
      <Post post={post} user={user} />
    </Wrapper>
  );
}

export default ArticlePage;
