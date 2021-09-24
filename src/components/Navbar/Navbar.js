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
import { logoutAsync } from "../../redux/reducers/userReducer"
import { useDispatch } from "react-redux";

function Navbar() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutAsync()).then(result => {
      console.log(result)
    })
  }
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
        <NavbarButton onClick={handleLogout}>登出</NavbarButton>
        <LuckButton>好手氣</LuckButton>
      </NavbarButtons>
    </NavbarWrapper>
  );
}

export default Navbar;
