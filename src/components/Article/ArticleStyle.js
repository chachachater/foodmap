import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../constants/style";
import FoodImg from "../pictures/food.png";

export const ArticleContainer = styled.a`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  margin-bottom: 42px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${COLOR.text_gray};

  ${MEDIA_QUERY.md} {
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY.sm} {
    flex-direction: column;
    justify-content: center;
    algin-items: center;
    height: 300px;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const UserAllArticle = styled.div`
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  ${MEDIA_QUERY.lg} {
    max-width: 768px;
  }

  ${MEDIA_QUERY.sm} {
    margin: 0;
  }
`;

export const ArticleImage = styled.div`
  height: 100%;
  width: 100%;
  max-width: 375px;
  background: url(${FoodImg}) center/cover;

  ${MEDIA_QUERY.md} {
    margin: 0 auto;
  }
`;

export const ArticleTitle = styled.div`
  font-size: ${FONT.h3};
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 3px;
  margin-bottom: 16px;

  ${MEDIA_QUERY.lg} {
    height: 100px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
  }

  ${MEDIA_QUERY.md} {
    max-width: 375px;
    margin: 0 auto;
    font-size: ${FONT.h4};
    -webkit-line-clamp: 3;
  }
`;

export const ArticleDesc = styled.div`
  height: 100%;
  justify-content: center;

  ${MEDIA_QUERY.md} {
    display: none;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 30px;

  ${MEDIA_QUERY.md} {
    justify-content: center;
    margin-left: 10px;
  }

  ${MEDIA_QUERY.sm} {
    margin: 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 40px;
  margin-bottom: 90px;
  ${MEDIA_QUERY.md} {
    margin-bottom: 40px;
  }
`;

export const FilterTitle = styled.h1``;

export const FilterOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterOption = styled.div`
  margin-right: 20px;
`;