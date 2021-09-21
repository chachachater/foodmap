import { Navbar } from "../Navbar";
import { Wrapper } from "../../constants/globalStyle";
import { Profile } from "./components";
import { Article } from "../Article";
import React from "react";

export default function ProfilePage() {
  return (
    <Wrapper>
      <Navbar />
      <Profile />
      <Article />
    </Wrapper>
  );
}
