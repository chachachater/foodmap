import styled from "styled-components";
import { COLOR, FONT, MEDIA_QUERY } from "../../../constants/style";
import addLogo from "../../../components/pictures/addLogo.png";
import bhLogo from "../../../components/pictures/bhLogo.png";
import urlLogo from "../../../components/pictures/urlLogo.png";
import PropTypes from "prop-types";
import React from "react";

export const SearchContainer = styled.div`
  padding: 150px 16px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchBorder = styled.div`
  border: 1px solid ${COLOR.black};
  border-radius: 40px;
  width: 100%;
  margin: 0 auto 32px;
`;

export const SearchMap = styled.div`
  width: 100%;
  height: 300px;
  background: ${COLOR.text_gray};
  margin-bottom: 48px;
`;

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 48px;

  ${MEDIA_QUERY.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const RestaurantInfo = styled.div`
  margin-right: 24px;
  height: 300px;
`;

const InfoTitle = styled.h3`
  font-size: ${FONT.h3};
  margin-bottom: 20px;
  line-height: 1.4;
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

const InfoText = styled.div`
  font-size: ${FONT.h4};
  margin-left: 8px;
  line-height: 1.4;

  & + & {
    margin-top: 14px;
  }
`;

const AddLogo = styled.span`
  background: url(${addLogo}) center/cover;
  display: inline-block;
  width: 25px;
  height: 25px;
`;

const BhLogo = styled(AddLogo)`
  background: url(${bhLogo}) center/cover;
`;

const UrlLogo = styled(AddLogo)`
  background: url(${urlLogo}) center/cover;
`;

export const InfoImg = styled.div`
  width: 500px;

  ${MEDIA_QUERY.sm} {
    width: 400px;
  }

  ${MEDIA_QUERY.sm} {
    width: 300px;
  }
`;
const MarkerImg = styled.img`
  max-height: 30px;
  background: transparent;
`;
export function Marker({ text }) {
  return (
    <div>
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
  placeId: PropTypes.string,
};
export function RestaurantInfoContainer({ restaurantInfo }) {
  return (
    <RestaurantInfo>
      <InfoTitle>{restaurantInfo.name}</InfoTitle>
      <InfoContent>
        {restaurantInfo.formatted_address && <AddLogo />}
        <InfoText>{restaurantInfo.formatted_address}</InfoText>
      </InfoContent>
      <InfoContent>
        {restaurantInfo.opening_hours && <BhLogo />}
        <InfoText>
          {restaurantInfo.opening_hours &&
            restaurantInfo.opening_hours.weekday_text.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </InfoText>
      </InfoContent>
      <InfoContent>
        {restaurantInfo.website && <UrlLogo />}
        <InfoText>{restaurantInfo.website}</InfoText>
      </InfoContent>
    </RestaurantInfo>
  );
}

RestaurantInfoContainer.propTypes = {
  restaurantInfo: PropTypes.object,
};
