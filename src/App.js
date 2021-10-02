/* eslint-disable */
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyle } from "./constants/globalStyle";
import BackToTopBtn from "./components/BackToTop";
import Footer from "./components/Footer";
import HomePage from "./pages/blog/HomePage";
import ProfilePage from "./pages/blog/ProfilePage";
import RegisterPage from "./pages/user/RegisterPage";
import LoginPage from "./pages/user/LoginPage";
import AdminPage from "./components/Admin";
import BackStagePage from "./pages/blog/BackStagePage";
import ArticlePage from "./pages/blog/ArticlePage";
import SearchPage from "./pages/blog/SearchPage";
import NearbyPage from "./pages/blog/NearbyPage";
import EditPage from "./pages/blog/EditPage";
import { SendEmailPage, ResetPasswordPage } from "./pages/user/PasswordPage";
import { successAsync, logoutAsync } from "./redux/reducers/userReducer"
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(successAsync()).catch(err => {
      console.log(err)
    })
  }
  function handleLogout() {
    dispatch(logoutAsync()).catch(err => {
      console.log(err)
    })
  }
  return (
    <Router>
      <button onClick={handleClick}>test success</button>
      <button onClick={handleLogout}>test logout</button>
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
          <Link to="/posts/1">post</Link>
          <Link to="/search">search</Link>
          <Link to="/nearby">nearby</Link>
          <Link to="/edit">edit</Link>
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
          <ProfilePage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/backstage/:user">
          <BackStagePage />
        </Route>
        <Route path="/posts/:id">
          <ArticlePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/nearby">
          <NearbyPage />
        </Route>
        <Route path="/add">
          <EditPage />
        </Route>
        <Route path="/edit/:id">
          <EditPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
