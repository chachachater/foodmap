import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
export const MarkerPicURL =
  "https://www.pinclipart.com/picdir/big/126-1269086_google-map-marker-red-peg-png-image-red.png";
export const ImgMarker = styled.img`
  max-height: 30px;
  background: transparent;
`;
export const MarkerText = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
  white-pace: "nowrap";
`;
export const Marker = ({ text }) => {
  return (
    <div>
      <ImgMarker alt={"marker"} src={MarkerPicURL} />
      <MarkerText>{text}</MarkerText>
    </div>
  );
};
Marker.propTypes = {
  text: PropTypes.string,
  handleSetPlaceId: PropTypes.func,
  placeId: PropTypes.string,
};
export const ClickedMarker = ({ text, handleSetPlaceId, placeId }) => {
  return (
    <div
      onClick={() => {
        handleSetPlaceId(placeId);
      }}
    >
      <ImgMarker alt={"marker"} src={MarkerPicURL} />
      <MarkerText>{text}</MarkerText>
    </div>
  );
};
ClickedMarker.propTypes = {
  text: PropTypes.string,
  handleSetPlaceId: PropTypes.func,
  placeId: PropTypes.string,
};

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
