import React, { useState, useEffect } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import {
  HomeBanner,
  BannerBg,
  BannerInfo,
  BannerText,
  HomeTitle,
  LoadMore,
} from "./HomePageStyle";
import { HomePageSearch } from "../../../components/Search/Search";
import { fetchAllPosts } from "../../../WebAPI";
import { UserAllArticle } from "../../../components/Article/ArticleStyle";
import { ArticleInfo } from "../../../components/Article";
import useScroll from "../../../hooks/useScroll";
import useLoading from "../../../hooks/useLoading";
import Loading from "../../../components/Loading/Loading";

function HomePage() {
  const { isLoading, setIsLoading } = useLoading();
  const [postsData, setPostsData] = useState([]);
  const scroll = useScroll();
  const [offset, setOffset] = useState(0);
  const [postCounts, setPostCounts] = useState(0);
  const [inputText, setInputText] = useState("");
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const screenHeight = window.screen.availHeight;

  useEffect(() => {
    setIsLoading(true);
    fetchAllPosts(offset).then((result) => {
      setIsLoading(false);
      if (!result) return;
      setPostCounts(result.count);
      setPostsData(result.rows);
    });
  }, []);

  useEffect(() => {
    if (offset === 0) return;
    fetchAllPosts(offset).then((result) => {
      setPostsData(postsData.concat(result.rows));
      setIsLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (isLoading) return;
    if (clientHeight - scroll.y - screenHeight / 2 >= screenHeight / 2) return;
    if (postCounts > offset) {
      setIsLoading(true);
      setOffset(offset + 5);
    }
  }, [scroll]);

  useEffect(() => {
    setClientHeight(document.body.clientHeight);
  }, [postsData]);

  return (
    <Wrapper>
      <Navbar />
      {isLoading && <Loading />}
      <HomeBanner>
        <BannerBg />
        <BannerInfo>
          <BannerText>吃貨地圖，探索你想吃的美食餐廳</BannerText>
          <HomePageSearch inputText={inputText} setInputText={setInputText} />
        </BannerInfo>
      </HomeBanner>
      <HomeTitle>最新文章</HomeTitle>
      <UserAllArticle>
        <ArticleInfo postsData={postsData} />
      </UserAllArticle>
      <LoadMore>沒有食記囉</LoadMore>
    </Wrapper>
  );
}

export default HomePage;
