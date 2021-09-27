import React, { useState } from "react";
import {
  NavbarWrapper,
  LogoText,
  HamburgerIcon,
  NavbarButtons,
  NavbarButton,
  NavbarLogoutButton,
  LuckButton,
} from "./NavbarStyle";
import { logoutAsync } from "../../redux/reducers/userReducer"
import { useDispatch } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutAsync()).catch(err => {
      alert('操作失敗，發生錯誤')
      console.log(err)
    })
  }
  return (
    <NavbarWrapper>
      <LogoText to="/home">吃貨地圖</LogoText>
      <HamburgerIcon
        $isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></HamburgerIcon>
      <NavbarButtons $isMenuOpen={isMenuOpen}>
        {/* 登入狀態 */}
        <NavbarButton to="/edit">新增食記</NavbarButton>
        <NavbarButton>個人頁</NavbarButton>
        <NavbarButton>個人後台管理</NavbarButton>
        <NavbarLogoutButton onClick={handleLogout}>登出</NavbarLogoutButton>
        <LuckButton to="/luck">好手氣</LuckButton>
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
