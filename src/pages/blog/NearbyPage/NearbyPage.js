import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { SearchContainer, SearchBorder } from "../SearchPage/SearchPageStyle";
import { Map, Luck, LuckButton, LuckText } from "./NearbyPageStyle";
import Search from "../../../components/Search";

function NearbyPage() {
  return (
    <Wrapper>
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search text="請輸入所在地" />
        </SearchBorder>
        <Map></Map>
        <Luck>
          <LuckButton>好手氣</LuckButton>
          <LuckText>不知道要吃甚麼？來抽一家吧！！</LuckText>
        </Luck>
      </SearchContainer>
    </Wrapper>
  );
}

export default NearbyPage;
