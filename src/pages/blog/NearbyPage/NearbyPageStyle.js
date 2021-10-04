import styled from "styled-components";
import { COLOR, FONT } from "../../../constants/style";
import { MarkerImg } from "../SearchPage/SearchPageStyle";
import React from "react";
import PropTypes from "prop-types";
export const Map = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 24px;
  display: flex;
`;
export const MarginContainer = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
`;
export function Marker({ text, placeId, handleMarkerClickedAndSearch }) {
  return (
    <div
      onClick={() => {
        handleMarkerClickedAndSearch(placeId, text);
      }}
    >
      <MarkerImg
        alt={"marker"}
        style={{ maxHeight: "30px", background: "transparent" }}
        src={
          "https://www.pinclipart.com/picdir/big/126-1269086_google-map-marker-red-peg-png-image-red.png"
        }
      />
      <div>{text}</div>
    </div>
  );
}
Marker.propTypes = {
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
