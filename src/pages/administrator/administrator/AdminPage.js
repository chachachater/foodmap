import React, { useState, useEffect } from "react";
import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import { useHistory } from "react-router-dom";
import UserTable from "./UserTable";
import {
  BackStageTitle,
  SearchInput,
  SearchContainer,
  SearchBtn,
  BackStageWrapper,
} from "./AdminStyled";
import {
  fetchAdmin,
  fetchBanUser,
  fetchUnBanUser,
  adminSearchUser,
} from "../../../WebAPI";

export default function AdminPage() {
  const [userData, setUserData] = useState([]);
  const [isBanUser, setBanUser] = useState(false);
  const [inputText, setInputText] = useState("");
  const [fetching, setFetching] = useState(false);
  let history = useHistory();
  useEffect(() => {
    fetchAdmin().then((response) => {
      if (!response.ok) {
        alert(response.message);
        return history.push("/home");
      }

      setUserData(response.data);
    });
    setBanUser(false);
  }, [isBanUser]);

  const handleBanUser = (id) => {
    fetchBanUser(id);
    setBanUser(true);
  };

  const handleUnBanUser = (id) => {
    fetchUnBanUser(id);
    setBanUser(true);
  };
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClickSearchUser = () => {
    setFetching(true);
  };
  useEffect(async () => {
    let result;
    if (fetching && inputText !== "") {
      result = await adminSearchUser(inputText);
      setUserData([result.data]);
    }
    setFetching(false);
  }, [fetching]);
  return (
    <Wrapper>
      <Navbar />
      <BackStageWrapper>
        <BackStageTitle>管理員後台</BackStageTitle>
        <SearchContainer>
          <SearchInput
            placeholder="搜尋 Username"
            value={inputText}
            onChange={handleInputChange}
          />
          <SearchBtn onClick={handleClickSearchUser}>搜尋</SearchBtn>
        </SearchContainer>
        <UserTable
          userData={userData}
          handleBanUser={handleBanUser}
          handleUnBanUser={handleUnBanUser}
        />
      </BackStageWrapper>
    </Wrapper>
  );
}
