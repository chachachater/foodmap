import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../../constants/style";
import AvatarImg from "../../../components/pictures/avatar.png";
import { Link } from "react-router-dom";

export const PostWrapper = styled.div`
  padding: 0 24px;
  margin-top: 165px;
`;

export const PostContainer = styled.div`
  border: 2px solid ${COLOR.primary};
  margin: 0 auto;
  border-radius: 23px;
  padding: 24px 36px;
  max-width: 850px;

  ${MEDIA_QUERY.sm} {
    border: none;
    padding: 24px 24px;
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;

export const AuthorImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 18px;

  background: ${(props) => (props.$img ? `url(${props.$img}) center/cover` : `url(${AvatarImg}) center/cover`)};
`;

export const AuthorName = styled(Link)`
  color: ${COLOR.primary};
  font-size: ${FONT.h3};
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 23px;
  background: ${COLOR.secondary};
`;

export const PostTitle = styled.h1`
  border-top: 3px solid ${COLOR.secondary};
  border-bottom: 3px solid ${COLOR.secondary};
  padding: 12px 0;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 48px;
`;

export const PostContent = styled.p`
  font-size: ${FONT.h4};
  line-height: 1.6;
  margin-bottom: 48px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`;

export const PostImg = styled.div``;
