import styled from "styled-components";
import backToTop from "../pictures/backtotop.svg";

export const BackToTop = styled.button`
  height: 55px;
  width: 55px;
  position: fixed;
  background: url(${backToTop}) center/cover;
  right: 10px;
  bottom: 10px;
  z-index: 50;
`;
