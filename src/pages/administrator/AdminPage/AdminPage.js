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
import {
  fetchAdmin,
  fetchBanUser,
  fetchUnBanUser,
  adminSearchUser,
} from "../../../WebAPI";

function AdminPage() {
  const [userData, setUserData] = useState([]);
  // const [isBanUser, setBanUser] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [inputText, setInputText] = useState("");

  // useEffect(() => {
  //   fetchAdmin().then((response) => {
  //     setUserData(response.data);
  //   });
  //   setBanUser(false);
  // }, []);
  useEffect(() => {
    fetchAdmin().then((response) => {
      setUserData(response.data);
    });
  }, []);
  const handleBanUser = async (id) => {
    if (waiting) return;
    setWaiting(true);
    let result = await fetchBanUser(id);
    if (result.ok) {
      setUserData(
        userData.map((data) => {
          if (data.id !== id) return data;
          return { ...data, user_level: 0 };
        })
      );
      setWaiting(false);
    }
  };

  const handleUnBanUser = async (id) => {
    if (waiting) return;
    setWaiting(true);
    let result = await fetchUnBanUser(id);
    if (result.ok) {
      setUserData(
        userData.map((data) => {
          if (data.id !== id) return data;
          return { ...data, user_level: 1 };
        })
      );
    }
    setWaiting(false);
  };
  async function handleSearch() {
    let result = await adminSearchUser(inputText);
    console.log(result);
    if (result.ok) setUserData([result.data]);
  }
  return (
    <Wrapper>
      <Navbar />
      <BackStageWrapper>
        <BackStageTitle>管理員後台</BackStageTitle>
        <SearchContainer>
          <SearchInput
            placeholder="搜尋 Username"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <SearchBtn onClick={handleSearch}>搜尋</SearchBtn>
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
export default AdminPage;
