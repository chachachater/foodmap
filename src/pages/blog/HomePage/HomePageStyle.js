import styled from "styled-components";
import { COLOR, FONT } from "../../../constants/style";
import homeBanner from "../../../components/pictures/homeBanner.png";

export const HomeBanner = styled.div`
  position: relative;
  margin-bottom: 48px;
`

export const BannerBg = styled.div`
  background: url(${homeBanner}) center/cover;
  filter: blur(8px);
  width: 100%;
  height: 400px;
  z-index: -1;
`


export const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BannerText = styled.h1`
  background: ${COLOR.white};
  opacity: 0.9;
  padding: 14px 28px;
  border-radius: 40px;
  margin-bottom: 24px;
  line-height: 1.2;

  //word-break: keep-all;
`;

export const HomeTiltle = styled.h1`
  font-size: ${FONT.h1};
  text-align: center;
  margin-bottom: 48px;
`
