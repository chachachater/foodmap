import styled from "styled-components";
import { COLOR, MEDIA_QUERY } from "../../constants/style";
import logoGithub from "../pictures/logoGithub.png";
import github from "../pictures/github.png";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  width: 100%;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
  padding: 0 28px;
  position: relative;
  left: 0;
  bottom: 0;

  ${MEDIA_QUERY.md} {
    flex-direction: column;
    justify-content: center;
  }

  ${MEDIA_QUERY.sm} {
    padding: 0 8px;
  }
`;

export const FooterLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLogo = styled.a`
  margin-right: 36px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${MEDIA_QUERY.md} {
    margin-right: 54px;
  }

  ${MEDIA_QUERY.sm} {
    margin-right: 12px;
  }
`;

export const FooterLogoImg = styled.div`
  background: url(${logoGithub}) center/cover;
  width: 70px;
  height: 70px;

  ${MEDIA_QUERY.md} {
    width: 60px;
    height: 60px;
  }
`;

export const FooterAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthorInfo = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    border-bottom: 2px solid ${COLOR.btn};
  }

  ${MEDIA_QUERY.md} {
    flex-direction: row;
  }

  ${MEDIA_QUERY.sm} {
    & + & {
      margin-left: 16px;
    }
  }
`;

export const GithubImg = styled.div`
  background: url(${github}) center/cover;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-bottom: 4px;

  ${MEDIA_QUERY.md} {
    width: 30px;
    height: 30px;
  }

  ${MEDIA_QUERY.sm} {
    width: 25px;
    height: 25px;
  }
`;

export const AuthorName = styled.p`
  color: ${COLOR.primary};

  ${MEDIA_QUERY.md} {
    margin-left: 4px;
  }
`;

export const FooterText = styled.p`
  color: ${COLOR.secondary};
`;
