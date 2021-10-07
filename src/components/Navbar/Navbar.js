/* eslint-disable */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAsync())
    cookies.remove('getMe')
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
        {user && user.data.userLevel === 1 && <NavbarButton to={`/user/${user.data.userId}`}>個人頁</NavbarButton>}
        {user && user.data.userLevel === 1 && <NavbarButton to={`/backstage/${user.data.userId}`}>個人後台管理</NavbarButton>}
        {user && user.data.userLevel === 2 && <NavbarButton to={`/admin`}>管理後台</NavbarButton>}
        {user && <NavbarButton to="/home" onClick={handleLogout}>登出</NavbarButton>}
        <NearbyButton to="/nearby">附近餐廳</NearbyButton>
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
