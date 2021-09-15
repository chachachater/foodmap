import Form from "../../../components/Form";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import Footer from "../../../components/Footer";

function RegisterPage() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default RegisterPage;
