/* eslint-disable */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync, selectUser } from "../../redux/reducers/userReducer";
import {
  NavbarWrapper,
  LogoText,
  HamburgerIcon,
  NavbarButtons,
  NavbarButton,
  NearbyButton,
} from "./NavbarStyle";

function Navbar() {
  const userState = useSelector(selectUser);
  const user = userState.result
  let userPath = `/user`
  if (user) userPath = `/user/${user.data.userId}`
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAsync())
  }
  return (
    <NavbarWrapper>
      <LogoText to="/home">吃貨地圖</LogoText>
      <HamburgerIcon
        $isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></HamburgerIcon>
      <NavbarButtons $isMenuOpen={isMenuOpen}>
        {!user && <NavbarButton to="/register">註冊</NavbarButton>}
        {!user && <NavbarButton to="/login">登入</NavbarButton>}
        {user && user.data.userLevel === 1 && <NavbarButton to="/add">新增食記</NavbarButton>}
        {user && user.data.userLevel === 1 && <NavbarButton to={userPath}>個人頁</NavbarButton>}
        {user && user.data.userLevel === 1 && <NavbarButton>個人後台管理</NavbarButton>}
        {user && user.data.userLevel === 2 && <NavbarButton>管理後台</NavbarButton>}
        {user && <NavbarButton to="/home" onClick={handleLogout}>登出</NavbarButton>}
        <NearbyButton to="/nearby">附近餐廳</NearbyButton>
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
