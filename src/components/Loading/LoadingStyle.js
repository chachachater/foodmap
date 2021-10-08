import styled, { keyframes } from "styled-components";
import { COLOR, FONT } from "../../constants/style";

export const spinnerRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 360deg);
  }
`;
export const spinnerArc = keyframes`
  from {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 0;
  }
  to {
    stroke-dasharray: 100 150;
    stroke-dashoffset: -140;
  }
`;
export const Background = styled.div`
  background: #313131;
`
export const Title = styled.div`
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${FONT.logo};
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLOR.primary};
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Spinner = styled.svg`
  z-index: 9;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
`;
export const SpinnerRing = styled.circle`
  fill: none;
  stroke: #99BC90;
  stroke-width: 4;
  opacity: 0.73;
`
export const SpinnerLine = styled.circle`
  fill: none;
  stroke: #013320;
  stroke-width: 4;
  opacity: 0.5;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  transform: rotate3d(0, 0, 1, 0deg);
  animation: 2156ms ${spinnerArc} ease-in-out infinite,
    1829ms ${spinnerRotate} linear infinite;
`
