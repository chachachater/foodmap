import React, { useState } from "react";
import {
  NavbarWrapper,
  LogoText,
  HamburgerIcon,
  NavbarButtons,
  NavbarButton,
  LuckButton,
} from "./NavbarStyle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarWrapper>
      <LogoText to="/">吃貨地圖</LogoText>
      <HamburgerIcon
        $isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></HamburgerIcon>
      <NavbarButtons $isMenuOpen={isMenuOpen}>
        {/* 登入狀態 */}
        <NavbarButton to="/edit">新增食記</NavbarButton>
        <NavbarButton>個人頁</NavbarButton>
        <NavbarButton>個人後台管理</NavbarButton>
        <NavbarButton>登出</NavbarButton>
        <LuckButton to="/luck">好手氣</LuckButton>
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
