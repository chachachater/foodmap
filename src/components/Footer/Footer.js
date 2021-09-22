import React from "react";
import {
  FooterWappwer,
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
    <FooterWappwer>
      <FooterLink>
        <FooterLogo>
          <FooterLogoImg></FooterLogoImg>
        </FooterLogo>
        <FooterAuthor>
          <AuthorInfo>
            <GithubImg></GithubImg>
            <AuthorName>Selena</AuthorName>
          </AuthorInfo>
          <AuthorInfo>
            <GithubImg></GithubImg>
            <AuthorName>Rich</AuthorName>
          </AuthorInfo>
          <AuthorInfo>
            <GithubImg></GithubImg>
            <AuthorName>SiSi</AuthorName>
          </AuthorInfo>
          <AuthorInfo>
            <GithubImg></GithubImg>
            <AuthorName>YO</AuthorName>
          </AuthorInfo>
        </FooterAuthor>
      </FooterLink>
      <FooterText>Copyright © 2021 Lidemy. All rights reserved</FooterText>
    </FooterWappwer>
  );
}

export default Footer;
