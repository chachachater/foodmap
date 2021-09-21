import React from "react";
import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
function ResetPasswordPage() {
  return (
    <Wrapper>
      <UserNavbar />
      <Form
        title="重設密碼"
        password="新密碼"
        checkPassword="確認密碼"
        submitValue="修改"
        linkValue="已有帳號，前往登入"
      />
    </Wrapper>
  );
}

export default ResetPasswordPage;
