import React from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";

function SendEmailPage() {
  return (
    <Wrapper>
      <UserNavbar />
      <Form
        title="忘記密碼"
        email="Email"
        submitValue="發送"
        linkValue="忘記密碼， 10 秒後未收到驗證碼，請重新發送"
      />
    </Wrapper>
  );
}

export default SendEmailPage;
