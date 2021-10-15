import styled from "styled-components";
import { FONT, COLOR, MEDIA_QUERY } from "../../../constants/style";
import { ArticleImage } from "../../../components/Article/ArticleStyle";

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
  color: ${(props) => (props.$active ? "white" : COLOR.primary)};
  background-color: ${(props) => (props.$active ? COLOR.secondary : "white")};
  cursor: pointer;
`;

export const Private = styled(Publish)``;

export const ArticleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA_QUERY.sm} {
    max-width: 375px;
    margin: 0 auto;
    padding: 0 8px;
  }
`;

export const ArticleTime = styled.div`
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

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ${MEDIA_QUERY.md} {
    justify-content: center;
  }
`;

export const EditBtn = styled.button`
  color: ${COLOR.primary};
  font-size: ${FONT.h4};
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;
  background: ${COLOR.btn};
  white-space: nowrap;
  &:hover {
    filter: saturate(2.5);
  }
  ${MEDIA_QUERY.md} {
    margin-left: 10px;
  }
`;

export const DeleteBtn = styled(EditBtn)`
  color: ${COLOR.secondary};
  background-color: white;
  border: 1px solid ${COLOR.primary};
  margin-left: 40px;

  ${MEDIA_QUERY.md} {
    margin-left: 8px;
  }
`;

export const BackStageImage = styled(ArticleImage)`
  background: ${(props) => `url(${props.$link}) center/cover`};
`;

export const BackStageContainer = styled.div`
  color: black;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  margin-bottom: 60px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${COLOR.text_gray};

  ${MEDIA_QUERY.lg} {
    max-width: 768px;
  }

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
