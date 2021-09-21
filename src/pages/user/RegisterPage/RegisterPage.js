import React from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle"
function RegisterPage() {
  return (
    <Wrapper>
      <UserNavbar />
      <Form
        title="會員註冊"
        username="用戶名稱"
        email="Email"
        password="密碼"
        checkPassword="確認密碼"
        submitValue="註冊"
        linkValue="已有帳號，前往登入"
      />
    </Wrapper>
  );
}

export default RegisterPage;
