import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../constants/style";
import hamburgerIcon from "../pictures/hamburgerIcon.png";
import hamburgerIcon_2 from "../pictures/hamburgerIcon_2.png";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 999;
  align-items: center;
  height: 95px;
  width: 100%;
  padding: 28px;
  background: ${COLOR.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const UserNavbarWrapper = styled(NavbarWrapper)`
  justify-content: center;
`;

export const LogoText = styled(Link)`
  font-size: ${FONT.logo};
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLOR.primary};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.2);
  }

  ${MEDIA_QUERY.md} {
    cursor: pointer;
    display: block;
    width: 28px;
    height: 18px;
    background: url(${hamburgerIcon}) center/cover;

    ${(props) =>
      props.$isMenuOpen &&
      `
       background: url(${hamburgerIcon_2}) center/cover;
    `}
  }
`;

export const NavbarButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERY.md} {
    display: none;

    ${(props) =>
      props.$isMenuOpen &&
      `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: fixed;
      padding-top: 48px;
      top: 95px;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${COLOR.white};
      box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
    `}
  }
`;

export const NavbarButton = styled(Link)`
  color: ${COLOR.primary};
  font-size: ${FONT.h4};
  line-height: 1;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;
  transition: all 0.2s;

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: ${COLOR.btn};
  }

  ${MEDIA_QUERY.md} {
    border-radius: 0;
    border-bottom: 1px solid ${COLOR.secondary};
    width: 60%;
    justify-content: center;
    height: 42px;
    transition: all 0.2s;

    & + & {
      margin-top: 84px;
    }

    &:hover {
      background: none;
      border-bottom: 3px solid ${COLOR.btn};
    }
  }
`;

export const NavbarLogoutButton = styled.a`
  color: ${COLOR.primary};
  font-size: ${FONT.h4};
  line-height: 1;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;
  transition: all 0.2s;
  margin-left: 4px;

  &:hover {
    background: ${COLOR.btn};
  }

  ${MEDIA_QUERY.md} {
    border-radius: 0;
    border-bottom: 1px solid ${COLOR.secondary};
    width: 60%;
    justify-content: center;
    height: 42px;
    transition: all 0.2s;

    & {
      margin-top: 84px;
    }

    &:hover {
      background: none;
      border-bottom: 3px solid ${COLOR.btn};
    }
  }
`;

export const LuckButton = styled(NavbarButton)`
  color: ${COLOR.white};
  background: ${COLOR.primary};
  margin-left: 4px;

  &:hover {
    color: ${COLOR.primary};
  }

  ${MEDIA_QUERY.md} {
    color: ${COLOR.primary};
    background: none;

    &:hover {
      color: ${COLOR.secondary};
    }
  }
`;
