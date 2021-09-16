import Form from "../../../components/Form";
import { UserNavbar } from "../../../components/Navbar";

function SendEmailPage() {
  return (
    <>
      <UserNavbar />
      <Form
        title="忘記密碼"
        email="Email"
        submitValue="發送"
        linkValue="忘記密碼， 10 秒後未收到驗證碼，請重新發送"
      />
    </>
  );
}

export default SendEmailPage;
