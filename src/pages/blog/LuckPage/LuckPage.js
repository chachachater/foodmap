import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { SearchContainer, SearchBorder } from "../SearchPage/SearchPageStyle";
import { LuckMap } from "./LuckPageStyle";
import Search from "../../../components/Search";

function LuckPage() {
  return (
    <Wrapper>
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search text="請輸入所在地" />
        </SearchBorder>
        <LuckMap></LuckMap>
      </SearchContainer>
    </Wrapper>
  );
}

export default LuckPage;
