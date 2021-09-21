import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import {
  HomeBanner,
  BannerBg,
  BannerInfo,
  BannerText,
  HomeTiltle,
} from "./HomePageStyle";
import Search from "../../../components/Search";
import { UserAllArticle } from "../../../components/Article/ArticleStyle";
import { ArticleInfo } from "../../../components/Article";

function HomePage() {
  return (
    <Wrapper>
      <Navbar />
      <HomeBanner>
        <BannerBg></BannerBg>
        <BannerInfo>
          <BannerText>吃貨地圖，探索你想吃的美食餐廳</BannerText>
          <Search text="搜尋餐廳" />
        </BannerInfo>
      </HomeBanner>
      <HomeTiltle>最新文章</HomeTiltle>
      <UserAllArticle>
        <ArticleInfo />
        <ArticleInfo />
      </UserAllArticle>
    </Wrapper>
  );
}

export default HomePage;
