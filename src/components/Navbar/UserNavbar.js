import React from "react";
import { UserNavbarWrapper, LogoText } from "./NavbarStyle";

function UserNavbar() {
  return (
    <UserNavbarWrapper>
      <LogoText to="/home">吃貨地圖</LogoText>
    </UserNavbarWrapper>
  );
}

export default UserNavbar;
