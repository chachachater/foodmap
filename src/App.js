import React from "react";
import { GlobalStyle, Wrapper } from "./constants/globalStyle";
import Footer from "./components/Footer";
// import RegisterPage from "./pages/user/RegisterPage";
import UserProfile from "./components/UserProfile"
//import LoginPage from "./pages/user/LoginPage";
//import { SendEmailPage, ResetPasswordPage } from "./pages/user/PasswordPage";

function App() {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <UserProfile />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
