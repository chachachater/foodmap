import React from "react";
import PropTypes from "prop-types";
import {
  ArticleContent,
  ArticleTitle,
} from "../../../components/Article/ArticleStyle";
import {
  BackStageContainer,
  ArticleBottom,
  ArticleTime,
  BtnContainer,
  EditBtn,
  DeleteBtn,
} from "./BackStagStyled";
import ArticleImage from "../../../components/Article/ArticleImage"

function BackStageArticle({ userPost, image, toEditPage, onDelete, setPage }) {
  const onDeletePost = () => {
    onDelete(userPost.id);
  };

  return (
    <BackStageContainer>
      <ArticleImage imgSrc={image} setPage={setPage} />
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
  image: PropTypes.string,
  toEditPage: PropTypes.func,
  onDelete: PropTypes.func,
  setPage: PropTypes.func,
};

export default BackStageArticle;
