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
//import ImageViewer from "../../../components/ImageViewer";
import { FetchGetPost, FetchGetUser } from "../../../webAPI/ArticleAPI";
import { useParams } from "react-router-dom";

function Post({ post, authorImg, user }) {
  if (!post) return null;

  return (
    <PostWrapper>
      <PostContainer>
        <PostAuthor>
          <AuthorImg $img={authorImg}></AuthorImg>
          <AuthorName>{user.nickname}</AuthorName>
        </PostAuthor>
        <PostTitle>{post.post.title}</PostTitle>
        <PostContent>{post.post.content}</PostContent>
        <PostImg>
          {/* <ImageViewer />  */}
          {/* photos={post.images} */}
        </PostImg>
      </PostContainer>
    </PostWrapper>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object,
  authorImg: PropTypes.string,
};

function ArticlePage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [user, setUser] = useState();
  const [authorImg, setAuthorImg] = useState();

  useEffect(() => {
    FetchGetPost(1).then((post) => {
      if (!post) {
        console.log(post.message);
        return;
      }
      setPost(post);

      FetchGetUser(1).then((user) => {
        if (!user) {
          console.log(user.message);
          return;
        }
        setUser(user.data);
        setAuthorImg(user.data.picture_url);
      });
    });
    console.log(post);
  }, [id]);

  console.log(user);

  return (
    <Wrapper>
      <Navbar />
      <Post post={post} user={user} authorImg={authorImg} />
    </Wrapper>
  );
}

export default ArticlePage;
