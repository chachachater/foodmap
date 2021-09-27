import styled from "styled-components";
import { COLOR, FONT } from "../../../constants/style";

export const Map = styled.div`
  width: 100%;
  height: 400px;
  background: ${COLOR.text_gray};
  margin-bottom: 48px;
`;

export const Luck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LuckButton = styled.button`
  font-size: ${FONT.h4};
  line-height: 1;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;
  transition: all 0.2s;
  color: ${COLOR.white};
  background: ${COLOR.primary};
  margin-bottom: 16px;

  &:hover {
    color: ${COLOR.primary};
    background: ${COLOR.btn};
  }
`;

export const LuckText = styled.div`
  color: ${COLOR.primary};
`;
