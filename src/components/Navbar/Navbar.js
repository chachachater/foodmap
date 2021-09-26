import React, { useState } from "react";
import {
  NavbarWrapper,
  LogoText,
  HamburgerIcon,
  NavbarButtons,
  NavbarButton,
  LuckButton,
} from "./NavbarStyle";
import { logoutAsync } from "../../redux/reducers/userReducer"
import { useDispatch } from "react-redux";

function Navbar() {
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);

=======
  //const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutAsync()).then(result => {
      console.log(result)
    })
  }
>>>>>>> d4a9017f4e23f5cd4f1bcb86c65aae75887ef0be
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
<<<<<<< HEAD
        <NavbarButton>登出</NavbarButton>
        <LuckButton to="/luck">好手氣</LuckButton>
=======
        <NavbarButton onClick={handleLogout}>登出</NavbarButton>
        <LuckButton>好手氣</LuckButton>
>>>>>>> d4a9017f4e23f5cd4f1bcb86c65aae75887ef0be
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
