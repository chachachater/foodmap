import React from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle"

function LoginPage() {
  return (
    <Wrapper>
      <UserNavbar />
      <Form
        title="登入"
        username="用戶名稱 / Email"
        password="密碼"
        submitValue="登入"
        linkValue="忘記密碼， 前往重設"
      />
    </Wrapper>
  );
}

export default LoginPage;
