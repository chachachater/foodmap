/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import UserTable from "./UserTable";
import {
  BackStageTitle,
  SearchInput,
  SearchContainer,
  SearchBtn,
  BackStageWrapper,
} from "./AdminStyled";
import { fetchAdmin, fetchBanUser, fetchUnBanUser } from "../../../WebAPI";

export default function AdminPage() {
  const [userData, setUserData] = useState([]);
  const [isBanUser, setBanUser] = useState(false)

  useEffect(() => {
    fetchAdmin().then((respone) => {
      setUserData(respone.data)
    }) 
    setBanUser(false)
  }, [isBanUser]);

  const handleBanUser = (id) => {
    fetchBanUser(id)
    setBanUser(true)
  }

  const handleUnBanUser = (id) => {
    fetchUnBanUser(id)
    setBanUser(true)
  }

console.log(userData)
  return (
    <Wrapper>
      <Navbar />
      <BackStageWrapper>
        <BackStageTitle>管理員後台</BackStageTitle>
        <SearchContainer>
          <SearchInput placeholder="搜尋 Username" />
          <SearchBtn>搜尋</SearchBtn>
        </SearchContainer>
        <UserTable userData={userData} handleBanUser={handleBanUser} handleUnBanUser={handleUnBanUser} />
      </BackStageWrapper>
    </Wrapper>
  );
}