import React from "react";
import PropTypes from "prop-types";
import {
  ArticleContent,
  ArticleTitle,
} from "../../../components/Article/ArticleStyle";
import {
  BackStageContainer,
  BackStageImage,
  ArticleBottom,
  ArticleTime,
  BtnContainer,
  EditBtn,
  DeleteBtn,
} from "./BackStagStyled";

function BackStageArticle({ userPost, userImgs, toEditPage, onDelete }) {
  const onDeletePost = () => {
    onDelete(userPost.id);
  };

  return (
    <BackStageContainer>
      {userImgs.map(
        (userImg) =>
          userImg.postId === userPost.id && (
            <BackStageImage key={userImg.postId} $link={userImg.link} />
          )
      )}
      <ArticleContent>
        <ArticleTitle>{userPost.title}</ArticleTitle>
        <ArticleBottom>
          <ArticleTime>
            {new Date(userPost.visited_time).toLocaleDateString()}
          </ArticleTime>
          <BtnContainer>
            <EditBtn onClick={toEditPage}>編輯</EditBtn>
            <DeleteBtn onClick={onDeletePost}>刪除</DeleteBtn>
          </BtnContainer>
        </ArticleBottom>
      </ArticleContent>
    </BackStageContainer>
  );
}
BackStageArticle.propTypes = {
  userPost: PropTypes.object,
  userImgs: PropTypes.array,
  toEditPage: PropTypes.func,
  onDelete: PropTypes.func,
};

export default BackStageArticle;
