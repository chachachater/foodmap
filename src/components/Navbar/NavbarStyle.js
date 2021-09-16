import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../constants/style";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
  width: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 68px;
`;

export const LogoText = styled.a`
  font-size: ${FONT.logo};
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLOR.primany};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${MEDIA_QUERY}
`;
