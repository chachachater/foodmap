import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyle } from "./constants/globalStyle";
import Footer from "./components/Footer";
import Profile from "./pages/blog/ProfilePage";
import RegisterPage from "./pages/user/RegisterPage";
import LoginPage from "./pages/user/LoginPage";
import { SendEmailPage, ResetPasswordPage } from "./pages/user/PasswordPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Router exact path="/">
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
          <Link to="/forget">forget</Link>
          <Link to="/reset-password">reset-password</Link>
          <Link to="/user/1">Profile</Link>
        </Router>
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
