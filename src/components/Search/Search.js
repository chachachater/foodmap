import React from "react";
import PropTypes from "prop-types";
import {
  SearchBox,
  SearchWrapper,
  SearchButton,
  ButtonImg,
} from "./SearchStyle";

function Search({
  text,
  handleInputChange,
  inputText,
  restaurantList = [],
  handleSearchRestaurant,
  // setFocused,
}) {
  return (
    <SearchWrapper>
      <SearchBox
        text={text}
        handleInputChange={handleInputChange}
        inputText={inputText}
        restaurantList={restaurantList}
        handleSearchRestaurant={handleSearchRestaurant}
        // setFocused={setFocused}
      />
      <SearchButton>
        <ButtonImg></ButtonImg>
      </SearchButton>
    </SearchWrapper>
  );
}

Search.propTypes = {
  text: PropTypes.string,
  handleInputChange: PropTypes.func,
  inputText: PropTypes.string,
  // setFocused: PropTypes.func,
  restaurantList: PropTypes.array,
  handleSearchRestaurant: PropTypes.func,
};
export default Search;
