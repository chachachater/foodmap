import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../constants/style";

export const ErrorBackground = styled.div`
  background: ${COLOR.white};
  box-shadow: 2px 2px 6px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 500px;
  height: 250px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  line-height: 125px;
  z-index: 50;

  ${MEDIA_QUERY.md} {
    width: 400px;
  }

  ${MEDIA_QUERY.sm} {
    width: 300px;
  }
`

export const ErrorText = styled.div`
  font-size: ${FONT.h1};
`

export const PreviousBtn = styled.button`
  color: ${COLOR.primary};
  font-size: ${FONT.h4};
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;
  transition: all 0.2s;

  &:hover {
    background: ${COLOR.btn};
  }
`