import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import useLogin from "../../../hooks/useLogin";
import { selectUser } from "../../../redux/reducers/userReducer";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading"
function LoginPage() {
  const userState = useSelector(selectUser)
  const [isLoading, setIsLoading] = useState(false)
  console.log(isLoading)
  useEffect(() => {
    console.log(userState.status)
    setIsLoading(!isLoading)
  }, [userState.status])
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
      {!isLoading && <Loading />}
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
