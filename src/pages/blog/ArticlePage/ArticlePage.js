import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import {
  Post,
  PostContainer,
  PostAuthor,
  AuthorImg,
  AuthorName,
  PostTitle,
  PostContent,
  PostImg,
} from "./ArticlePageStyle";
import ImageViewer from "./ImageViewer";

function ArticlePage() {

  return (
    <Wrapper>
      <Navbar />
      <Post>
        <PostContainer>
          <PostAuthor>
            <AuthorImg></AuthorImg>
            <AuthorName>大師姊</AuthorName>
          </PostAuthor>
          <PostTitle>再來一碗大乾麵</PostTitle>
          <PostContent>
            銷魂麵舖開店迄今，短短的時間，累積了超過近✨數萬人次✨吃過，瘋潮不斷的銷魂麵。
            <br />
            <br />
            這碗讓人吃了會回味，不吃會想念的銷魂麵!
            <br />
            秘密在於號稱辣油界愛馬仕的✨銷魂辣油✨。
            <br />
            <br />
            銷魂辣油是混合著數十種配方，完全天然，不加任何防腐劑，歷超過十小時的熬煮，每五分鐘必須要翻炒一次，最後加入太師祖給的神祕辣油，只需要一滴就可以讓人無盡的思念
            。這嘔心瀝血的製作，僅此一家，請認證大師姊標籤，勿購買來路不明的產品，大師姊無法對你負責。
            <br />
            <br />
            這麼精華的味道，經過無數次的研發，推出「太師祖親自傳授大師姊欲仙欲死銷魂超級小辣椒火爆系列之吹彈可破兼具滑順口感一吃就上癮的再來一碗大乾麵
            」，讓您在家也可以享用!
          </PostContent>
          <PostImg>
            <ImageViewer />
          </PostImg>
        </PostContainer>
      </Post>
    </Wrapper>
  );
}

export default ArticlePage;
