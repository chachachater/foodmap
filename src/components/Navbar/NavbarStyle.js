import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../constants/style";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  z-index: 999;
`;

export const UserNavbarWrapper = styled(NavbarWrapper)`
  justify-content: center;
`;

export const LogoText = styled.a`
  font-size: ${FONT.logo};
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLOR.primary};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavbarButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  
  ${MEDIA_QUERY}
`;

export const NavbarButton = styled.a`
  color: ${COLOR.primary};
  font-size: ${FONT.h4};
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: ${COLOR.btn};
  }
`;

export const LuckButton = styled(NavbarButton)`
  color: ${COLOR.white};
  background: ${COLOR.primary};
  margin-left: 12px;

  &:hover {
    color: ${COLOR.primary};
  }
`;

