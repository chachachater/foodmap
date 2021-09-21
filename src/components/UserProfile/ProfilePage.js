import { UserNavbar } from "../Navbar";
import { Wrapper } from "../../constants/globalStyle";
import { Profile, Article, BackToTopBtn } from "./components";
import React from "react";

export default function ProfilePage() {
  return (
    <Wrapper>
      <BackToTopBtn />
      <UserNavbar />
      <Profile />
      <Article />
    </Wrapper>
  );
}
