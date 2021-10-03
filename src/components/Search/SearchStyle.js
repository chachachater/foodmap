import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { COLOR, MEDIA_QUERY } from "../../constants/style";
import placeBtn from "../pictures/placeBtn.png";

export const SearchWrapper = styled.form`
  width: 100%;
  background: ${COLOR.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 40px;
`;
export const SearchInput = styled.input`
  padding: 0 8px;
  width: 85%;

  &::placeholder {
    color: ${COLOR.text_gray};
  }

  ${MEDIA_QUERY.sm} {
    width: 75%;
  }
`;
export const SearchButton = styled.button`
  border: 1px solid ${COLOR.black};
  border-radius: 40px;
  padding: 2px 28px;

  &:hover {
    background: ${COLOR.btn};
  }
`;
export const ButtonImg = styled.div`
  background: url(${placeBtn}) center/cover;
  width: 25px;
  height: 25px;
`;
const SearchBoxContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  margin-left: 30px;
  height: 25px;
`;
const AutocompleteList = styled.div`
  position: absolute;
  top: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
`;
export const SearchBox = ({
  text,
  handleInputChange,
  inputText,
  restaurantList,
  handleSearchRestaurant,
  setFocused,
}) => {
  return (
    <SearchBoxContainer>
      <Input
        type="text"
        placeholder={text}
        value={inputText}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            setFocused(false);
          }, 800);
        }}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <AutocompleteList style={{ position: "absolute", top: "20px" }}>
        {restaurantList.map((data, index) => {
          return (
            <div
              style={{ background: "white" }}
              key={index}
              onClick={() => {
                handleSearchRestaurant(
                  data.place_id,
                  data.structured_formatting.main_text
                );
              }}
            >
              {data.terms[0].value}
            </div>
          );
        })}
      </AutocompleteList>
    </SearchBoxContainer>
  );
};
SearchBox.propTypes = {
  text: PropTypes.string,
  handleInputChange: PropTypes.func,
  inputText: PropTypes.string,
  restaurantList: PropTypes.array,
  setFocused: PropTypes.func,
  handleSearchRestaurant: PropTypes.func,
};
