import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
import { FetchGetPost, FetchGetUser } from "../../../webAPI/ArticleAPI";
import { useParams } from "react-router-dom";

function Post({ post, user }) {
  if (!post) return null;

  return (
    <PostWrapper>
      <PostContainer>
        <PostAuthor>
          <AuthorImg $img={user && user.picture_url}></AuthorImg>
          <AuthorName>{user && user.nickname}</AuthorName>
        </PostAuthor>
        <PostTitle>{post.post && post.post.title}</PostTitle>
        <PostContent>{post.post && post.post.content}</PostContent>
        <PostImg>
          <ImageViewer photos={post.images} /> 
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
  const { id } = useParams();
  const [post, setPost] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    FetchGetPost(id).then((post) => {
      if (!post) {
        console.log(post.message);
        return;
      }
      setPost(post);
      
      const userId = post.post.user_id

      FetchGetUser(userId).then((user) => {
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
      <Post post={post} user={user} />
    </Wrapper>
  );
}

export default ArticlePage;
