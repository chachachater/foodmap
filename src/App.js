import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyle } from "./constants/globalStyle";
import BackToTopBtn from "./components/BackToTop";
import Footer from "./components/Footer";
import HomePage from "./pages/blog/HomePage";
import Profile from "./pages/blog/ProfilePage";
import RegisterPage from "./pages/user/RegisterPage";
import LoginPage from "./pages/user/LoginPage";
import AdminPage from "./components/Admin";
import BackStagePage from "./components/BackStage";
import { SendEmailPage, ResetPasswordPage } from "./pages/user/PasswordPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <BackToTopBtn />
      <Switch>
        <Router exact path="/">
          <Link to="/home">home</Link>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
          <Link to="/forget">forget</Link>
          <Link to="/reset-password">reset-password</Link>
          <Link to="/user/1">Profile</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/backstage/rich">後台</Link>
        </Router>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/forget">
          <SendEmailPage />
        </Route>
        <Route path="/reset-password">
          <ResetPasswordPage />
        </Route>
        <Route path="/user/:id">
          <Profile />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/backstage/:user">
          <BackStagePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
