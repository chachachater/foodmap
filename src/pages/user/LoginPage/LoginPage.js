import React from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import useLogin from "../../../hooks/useLogin";

function LoginPage() {
  const {
    handleInputChange,
    setUsername,
    setPassword,
    handleSubmit,
    errorMessage,
  } = useLogin();
  return (
    <Wrapper>
      <UserNavbar />
      <Form
        title="登入"
        username="用戶名稱 / Email"
        password="密碼"
        submitValue="登入"
        linkValue="忘記密碼， 前往重設"
        handleUsernameChange={handleInputChange(setUsername)}
        handlePasswordChange={handleInputChange(setPassword)}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </Wrapper>
  );
}

export default LoginPage;
