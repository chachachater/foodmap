import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import useRegister from "../../../hooks/useRegister";
import { selectUser } from "../../../redux/reducers/userReducer";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading"

function RegisterPage() {
  const userState = useSelector(selectUser)
  const [isLoading, setIsLoading] = useState(false)
  console.log(isLoading)
  useEffect(() => {
    setIsLoading(!isLoading)
  }, [userState.status])
  const {
    handleInputChange,
    setUsername,
    setPassword,
    setCheckedPassword,
    setEmail,
    handleSubmit,
    errorMessage,
  } = useRegister();
  return (
    <Wrapper>
      <UserNavbar />
      {!isLoading && <Loading />}
      <Form
        title="會員註冊"
        username="用戶名稱"
        email="Email"
        password="密碼"
        checkPassword="確認密碼"
        submitValue="註冊"
        linkValue="已有帳號，前往登入"
        handleUsernameChange={handleInputChange(setUsername)}
        handlePasswordChange={handleInputChange(setPassword)}
        handleCheckedPasswordChange={handleInputChange(setCheckedPassword)}
        handleEmailChange={handleInputChange(setEmail)}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </Wrapper>
  );
}

export default RegisterPage;
