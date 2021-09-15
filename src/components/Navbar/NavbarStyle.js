import styled from "styled-components";
import { color, font } from "../../constants/style";

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
  font-size: ${font.logo};
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${color.primany};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
