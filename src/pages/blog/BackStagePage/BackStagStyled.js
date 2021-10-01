import styled from "styled-components";
import { FONT, COLOR, MEDIA_QUERY } from "../../../constants/style";
import {
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
} from "../../../components/Article/ArticleStyle";
import React from "react";

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
  }
`;
const DeleteBtn = styled(EditBtn)`
  color: ${COLOR.secondary};
  background-color: white;
  border: 1px solid ${COLOR.primary};
  margin-left: 45px;
`;
function ArticleBtn() {
  return (
    <Container>
      <ArticleTime>2021/12/21</ArticleTime>
      <BtnContainer>
        <EditBtn>編輯</EditBtn>
        <DeleteBtn>刪除</DeleteBtn>
      </BtnContainer>
    </Container>
  );
}
const BackStageImage = styled(ArticleImage)`
  ${MEDIA_QUERY.lg} {
    max-width: 350px;
  }
  ${MEDIA_QUERY.sm} {
    max-width: 375px;
  }
`;
const BackStageContainer = styled(ArticleContainer)`
  margin-bottom: 60px;
  ${MEDIA_QUERY.lg} {
    max-width: 768px;
  }
`;
export function BackStageArticle() {
  return (
    <BackStageContainer>
      <BackStageImage />
      <ArticleContent>
        <ArticleTitle>
          台北西門町少女系餐廳甜蜜回歸！「水蜜桃舒芙蕾」及「巨型芒果舒芙蕾」登場，為你的七夕做好準備
        </ArticleTitle>
        <ArticleBtn />
      </ArticleContent>
    </BackStageContainer>
  );
}
