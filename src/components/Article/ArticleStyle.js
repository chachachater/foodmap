import styled from "styled-components";
import { FONT, MEDIA_QUERY } from "../../constants/style";
import FoodImg from "../pictures/food.png";

export const ArticleContainer = styled.a`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  margin-bottom: 36px;

  ${MEDIA_QUERY.md} {
    margin: 0 10px;
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY.sm} {
    flex-direction: column;
    justify-content: center;
    algin-items: center;
    height: 300px;
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const UserAllArticle = styled.div`
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  ${MEDIA_QUERY.lg} {
    max-width: 768px;
  }

  ${MEDIA_QUERY.sm} {
    margin: 0;
  }
`;

export const ArticleImage = styled.div`
  height: 100%;
  width: 375px;
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

  ${MEDIA_QUERY.sm} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export const ArticleDesc = styled.div`
  margin-top: 16px;
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

