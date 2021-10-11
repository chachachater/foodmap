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
  height: 100%;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 48px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
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
  cursor: pointer;

  & + & {
    margin-top: 14px;
  }
  .hidden {
    display: none;
    transition: 0.3s all;
  }
`;
const BusinessTime = styled.li``;
const WebsiteLink = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
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
export const MarkerImg = styled.img`
  max-height: 30px;
  background: transparent;
`;
export function RestaurantInfoContainer({ restaurantInfo, isFold, setIsFold }) {
  const { name, formatted_address, opening_hours, website } = restaurantInfo;
  return (
    <RestaurantInfo>
      <InfoTitle>{name}</InfoTitle>
      <InfoContent>
        {formatted_address && <AddLogo />}
        <InfoText>{formatted_address}</InfoText>
      </InfoContent>
      <InfoContent>
        {opening_hours && <BhLogo />}
        <InfoText
          as="ul"
          onClick={() => {
            setIsFold(!isFold);
          }}
        >
          {opening_hours === undefined
            ? ""
            : opening_hours.isOpen()
            ? "營業中"
            : "休息中"}
          {!opening_hours
            ? ""
            : opening_hours.weekday_text &&
              opening_hours.weekday_text.map((item, index) => {
                return (
                  <BusinessTime className={isFold ? "hidden" : ""} key={index}>
                    {item}
                  </BusinessTime>
                );
              })}
        </InfoText>
      </InfoContent>
      <InfoContent>
        {website && <UrlLogo />}
        <InfoText>
          {website && (
            <WebsiteLink href={website} target="_blank">
              網站
            </WebsiteLink>
          )}
        </InfoText>
      </InfoContent>
    </RestaurantInfo>
  );
}

RestaurantInfoContainer.propTypes = {
  restaurantInfo: PropTypes.object,
  isFold: PropTypes.bool,
  setIsFold: PropTypes.func,
};
