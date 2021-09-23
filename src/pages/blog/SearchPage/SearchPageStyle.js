import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../../constants/style";
import addLogo from "../../../components/pictures/addLogo.png";
import bhLogo from "../../../components/pictures/bhLogo.png";
import urlLogo from "../../../components/pictures/urlLogo.png";

export const SearchContainer = styled.div`
  padding: 150px 16px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchBorder = styled.div`
  border: 1px solid ${COLOR.black};
  border-radius: 40px;
  width: 100%;
  margin: 0 auto 32px;
`;

export const SearchMap = styled.div`
  width: 100%;
  height: 300px;
  background: ${COLOR.text_gray};
  margin-bottom: 48px;
`;

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 48px;

  ${MEDIA_QUERY.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const RestaurantInfo = styled.div`
  margin-right: 24px;
`;

export const InfoTitle = styled.h3`
  font-size: ${FONT.h3};
  margin-bottom: 20px;
  line-height: 1.4;
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

export const InfoText = styled.div`
  font-size: ${FONT.h4};
  margin-left: 8px;
  line-height: 1.4;

  & + & {
    margin-top: 14px;
  }
`;

export const AddLogo = styled.span`
  background: url(${addLogo}) center/cover;
  display: inline-block;
  width: 25px;
  height: 25px;
`;

export const BhLogo = styled(AddLogo)`
  background: url(${bhLogo}) center/cover;
`;

export const UrlLogo = styled(AddLogo)`
  background: url(${urlLogo}) center/cover;
`;

export const InfoImg = styled.div`
  width: 500px;

  ${MEDIA_QUERY.sm} {
    width: 400px;
  }

  ${MEDIA_QUERY.sm} {
    width: 300px;
  }
`;
