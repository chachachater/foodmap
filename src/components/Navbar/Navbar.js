import React from "react";
import {
  NavbarWrapper,
  LogoText,
  // Hamburger,
  // Span,
  NavbarButtons,
  NavbarButton,
  LuckButton,
} from "./NavbarStyle";

function Navbar() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <NavbarWrapper>
      <LogoText>吃貨地圖</LogoText>
      {/* <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} >
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </Hamburger> */}
      <NavbarButtons>
        {/* 登入狀態 */}
        <NavbarButton>新增食記</NavbarButton>
        <NavbarButton>個人頁</NavbarButton>
        <NavbarButton>個人後台管理</NavbarButton>
        <NavbarButton>登出</NavbarButton>
        <LuckButton>好手氣</LuckButton>
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
