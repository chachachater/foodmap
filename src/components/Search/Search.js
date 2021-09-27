import React from "react";
import PropTypes from "prop-types";
import { SearchWrapper, SearchInput, SearchButton, ButtonImg } from "./SearchStyle";

function Search(props) {
  return (
    <SearchWrapper>
      <SearchInput placeholder={props.text} />
      <SearchButton>
        <ButtonImg></ButtonImg>
      </SearchButton>
    </SearchWrapper>
  );
}

Search.propTypes = {
  text: PropTypes.string
};


export default Search;
