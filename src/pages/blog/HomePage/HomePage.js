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
import useLoading from "../../../hooks/useLoading";
import Loading from "../../../components/Loading/Loading";

function HomePage() {
  const { isLoading, setIsLoading } = useLoading();
  const [postsData, setPostsData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loadEnd, setLoadEnd] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchAllPosts(page).then((result) => {
      setIsLoading(false);
      if (!result) return;
      if (result.count < 5) {
        // 每次都會要 limit = 5 篇文章，這邊處理初始文章數量小於等於 5 的 edge case
        setPostsData(result.rows);
        setLoadEnd(true);
        return;
      }
      setPostsData(result.rows);
    });
  }, []);

  useEffect(() => {
    if (page === 0) return;
    if (page % 5 !== 0) return;
    fetchAllPosts(page).then((result) => {
      if (result.rows.length < 5) setLoadEnd(true);
      setPostsData((prev) => [...new Set([...prev, ...result.rows])]);
    });
  }, [page]);

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
        <ArticleInfo postsData={postsData} setPage={setPage} />
      </UserAllArticle>
      {loadEnd && <LoadMore>沒有食記囉</LoadMore>}
    </Wrapper>
  );
}

export default HomePage;
