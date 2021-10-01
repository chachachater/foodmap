import styled from "styled-components";
import { FONT, COLOR, MEDIA_QUERY } from "../../../constants/style";
import {
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
} from "../../../components/Article/ArticleStyle";
import React from "react";
import PropTypes from "prop-types";

export const BackStageWrapper = styled.div`
  padding: 0 24px;
  max-width: 1200px;
  margin: 0 auto;

  ${MEDIA_QUERY.sm} {
    padding: 0;
  }
`;

export const BackStageTitle = styled.div`
  font-size: 48px;
  margin: 0 auto;
  margin-top: 180px;
`;

export const Filter = styled.div`
  display: flex;
  border: 1px solid ${COLOR.secondary};
  margin-top: 130px;
  height: 60px;
  line-height: 60px;
  font-size: ${FONT.logo};
  margin-bottom: 60px;
`;

export const Publish = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  color: ${(props) => (props.active ? "white" : COLOR.primary)};
  background-color: ${(props) => (props.active ? COLOR.secondary : "white")};
`;

export const Private = styled(Publish)``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  ${MEDIA_QUERY.sm} {
    max-width: 375px;
    margin: 0 auto;
    padding: 0 8px;
  }
`;

const ArticleTime = styled.div`
  font-size: ${FONT.h3};
  line-height: 55px;
  margin-bottom: 10px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.h4};
  }

  ${MEDIA_QUERY.sm} {
    width: 375px;
    margin: 0 auto;
    text-align: left;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  ${MEDIA_QUERY.md} {
    justify-content: center;
  }
`;

const EditBtn = styled.button`
  background-color: ${COLOR.btn};
  border-radius: 40px;
  width: 88px;
  height: 65px;
  color: ${COLOR.primary};
  font-size: ${FONT.h3};

  ${MEDIA_QUERY.lg} {
    border-radius: 35%;
    font-size: ${FONT.h4};
    width: 60px;
    height: 45px;
  }

  ${MEDIA_QUERY.md} {
    margin-left: 10px;
  }
`;

const DeleteBtn = styled(EditBtn)`
  color: ${COLOR.secondary};
  background-color: white;
  border: 1px solid ${COLOR.primary};
  margin-left: 45px;

  ${MEDIA_QUERY.md} {
    margin-left: 20px;
  }
`;

function ArticleBtn({ userPost }) {
  return (
    <Container>
      <ArticleTime>
        {new Date(userPost.visited_time).toLocaleDateString()}
      </ArticleTime>
      <BtnContainer>
        <EditBtn>編輯</EditBtn>
        <DeleteBtn>刪除</DeleteBtn>
      </BtnContainer>
    </Container>
  );
}

ArticleBtn.propTypes = {
  userPost: PropTypes.object,
};

const BackStageImage = styled(ArticleImage)`
  background: ${(props) => `url(${props.$link}) center/cover`};

  ${MEDIA_QUERY.lg} {
    max-width: 350px;
  }

  ${MEDIA_QUERY.sm} {
    max-width: 375px;
  }
`;

const BackStageContainer = styled(ArticleContainer)`
  ${MEDIA_QUERY.lg} {
    max-width: 768px;
  }
`;

export function BackStageArticle({ userPost, userImg }) {
  console.log(userImg);
  return (
    <BackStageContainer>
      <BackStageImage $link={userImg} />
      <ArticleContent>
        <ArticleTitle>{userPost.title}</ArticleTitle>
        <ArticleBtn userPost={userPost} />
      </ArticleContent>
    </BackStageContainer>
  );
}

BackStageArticle.propTypes = {
  userPost: PropTypes.array,
  userImg: PropTypes.array,
};

