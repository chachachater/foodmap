import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY} from "../../../constants/style";
import AvatarImg from "../../../components/pictures/avatar.png";

export const Post = styled.div`
  padding: 0 24px;
  margin-top: 165px;
`


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
  background: url(${AvatarImg}) center/cover;
  margin-bottom: 18px;
`;

export const AuthorName = styled.p`
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
  line-height: 1.5;
  margin-bottom: 48px;
`;

export const PostImg = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  height: 280px;
  object-fit: contain;
`;
