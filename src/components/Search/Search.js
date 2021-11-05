import React from "react";
import PropTypes from "prop-types";
import {
  Input,
  SearchBox,
  SearchWrapper,
  SearchButton,
  ButtonImg,
  SearchBoxContainer,
} from "./SearchStyle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Search({
  text,
  handleInputChange,
  inputText,
  restaurantList = [],
  handleSearchRestaurant,
  handleTextSearch,
}) {
  return (
    <SearchWrapper>
      <SearchBox
        text={text}
        handleInputChange={handleInputChange}
        inputText={inputText}
        restaurantList={restaurantList}
        handleSearchRestaurant={handleSearchRestaurant}
      />
      <SearchButton onClick={handleTextSearch}>
        <ButtonImg />
      </SearchButton>
    </SearchWrapper>
  );
}
export function HomePageSearch({ inputText, setInputText }) {
  let history = useHistory();

  return (
    <SearchWrapper>
      <SearchBoxContainer>
        <Input
          placeholder={"想吃什麼？"}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && inputText !== "")
              history.push(`/search?query=${inputText}`);
          }}
        />
      </SearchBoxContainer>
      <SearchButton
        as={Link}
        to={inputText !== "" ? `/search?query=${inputText}` : `/search?query=`}
      >
        <ButtonImg></ButtonImg>
      </SearchButton>
    </SearchWrapper>
  );
}

Search.propTypes = {
  text: PropTypes.string,
  handleInputChange: PropTypes.func,
  inputText: PropTypes.string,
  setFocused: PropTypes.func,
  restaurantList: PropTypes.array,
  handleSearchRestaurant: PropTypes.func,
  handleTextSearch: PropTypes.func,
};
HomePageSearch.propTypes = {
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
};
export default Search;
