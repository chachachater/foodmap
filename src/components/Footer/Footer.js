import React from "react";
import {
  FooterWrapper,
  FooterLink,
  FooterLogo,
  FooterLogoImg,
  FooterAuthor,
  AuthorInfo,
  GithubImg,
  AuthorName,
  FooterText,
} from "./FooterStyle";

function Footer() {
  return (
    <FooterWrapper>
      <FooterLink>
        <FooterLogo href="https://github.com/chachachater/foodmap">
          <FooterLogoImg></FooterLogoImg>
        </FooterLogo>
        <FooterAuthor>
          <AuthorInfo href="https://github.com/chachachater">
            <GithubImg></GithubImg>
            <AuthorName>Selena</AuthorName>
          </AuthorInfo>
          <AuthorInfo href="https://github.com/rich2020s">
            <GithubImg></GithubImg>
            <AuthorName>Rich</AuthorName>
          </AuthorInfo>
          <AuthorInfo href="https://github.com/outshaker">
            <GithubImg></GithubImg>
            <AuthorName>SiSi</AuthorName>
          </AuthorInfo>
          <AuthorInfo href="https://github.com/YO-0115">
            <GithubImg></GithubImg>
            <AuthorName>YO</AuthorName>
          </AuthorInfo>
        </FooterAuthor>
      </FooterLink>
      <FooterText>Copyright © 2021 Lidemy. All rights reserved</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
