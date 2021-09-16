import styled from "styled-components";
import { color } from "../../constants/style";
import logoGithub from "../pictures/logoGithub.png";
import github from "../pictures/github.png";

export const FooterWappwer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  width: 100%;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
  margin-top: 65px;
  padding: 0 28px;
  position: relative;
  left: 0;
  bottom: 0;
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
`;

export const FooterLogoImg = styled.div`
  background: url(${logoGithub}) center/cover;
  width: 70px;
  height: 70px;
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
    border-bottom: 2px solid ${color.btn};
  }
`;

export const GithubImg = styled.div`
  background: url(${github}) center/cover;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-bottom: 4px;
`;

export const AuthorName = styled.p`
  color: ${color.primany};
`;

export const FooterText = styled.p`
  color: ${color.secondary};
`;
