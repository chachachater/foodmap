import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../../constants/style";
import {
  ImgMarker,
  MarkerText,
  MarkerPicURL,
} from "../../../components/Map/mapComponents";
import React from "react";
import PropTypes from "prop-types";
const MyMarkerImg = styled.img`
  height: 35px;
  width: 35px;
  background: transparent;
`;
export const MyPosition = ({ text }) => {
  return (
    <div>
      <MyMarkerImg
        alt={"current position"}
        src={
          "https://icon-library.com/images/my-location-icon/my-location-icon-29.jpg"
        }
      />
      <MarkerText>{text}</MarkerText>
    </div>
  );
};
MyPosition.propTypes = {
  text: PropTypes.string,
};
export const Map = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 24px;
  display: flex;
  ${MEDIA_QUERY.md} {
    height: 1000px;
    flex-direction: column;
  }
`;
export const MarginContainer = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
`;
export function NearbyMarker({ text, placeId, handleMarkerClickedAndSearch }) {
  return (
    <div
      onClick={() => {
        handleMarkerClickedAndSearch(placeId, text);
      }}
    >
      <ImgMarker alt={"marker"} src={MarkerPicURL} />
      <MarkerText>{text}</MarkerText>
    </div>
  );
}
NearbyMarker.propTypes = {
  text: PropTypes.string,
  handleMarkerClickedAndSearch: PropTypes.func,
  placeId: PropTypes.string,
};
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
