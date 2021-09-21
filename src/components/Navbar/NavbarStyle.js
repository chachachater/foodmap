import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../constants/style";

export const NavbarWrapper = styled.div`
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  height: 95px;
  width: 100%;
  background: ${COLOR.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

  ${MEDIA_QUERY}
`;
