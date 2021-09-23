import { Navbar } from "../Navbar";
import { Wrapper } from "../../constants/globalStyle";
import React from "react";
import {
  BackStageTitle,
  SearchInput,
  SearchContainer,
  SearchBtn,
  UserTable,
} from "./AdminStyled";

export default function AdminPage() {
  return (
    <Wrapper>
      <Navbar />
      <BackStageTitle>管理員後台</BackStageTitle>
      <SearchContainer>
        <SearchInput placeholder="搜尋 Username" />
        <SearchBtn>搜尋</SearchBtn>
      </SearchContainer>
      <UserTable />
    </Wrapper>
  );
}
