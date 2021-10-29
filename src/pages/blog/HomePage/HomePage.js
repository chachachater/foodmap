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
import { checkScrollBottom } from "../../../utils";

function HomePage() {
  const { isLoading, setIsLoading } = useLoading();
  const [postsData, setPostsData] = useState([]);
  const scroll = useScroll();
  const [offset, setOffset] = useState(0);
  const [postCounts, setPostCounts] = useState(0);
  const [inputText, setInputText] = useState("");
  const [loadEnd, setLoadEnd] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllPosts(offset).then((result) => {
      setIsLoading(false);
      if (!result) return;
      if (result.count <= 5) {
        // 每次都會要 limit = 5 篇文章，這邊處理初始文章數量小於等於 5 的 edge case
        setPostCounts(result.count);
        setPostsData(result.rows);
        setLoadEnd(true);
        return;
      }
      setPostCounts(result.count);
      setPostsData(result.rows);
    });
  }, []);

  useEffect(() => {
    if (offset === 0) return;
    setIsLoading(true);
    fetchAllPosts(offset).then((result) => {
      if (result.rows.length < 5 || postCounts === offset * 5 + 5)
        setLoadEnd(true);
      setIsLoading(false);
      setPostsData(postsData.concat(result.rows));
    });
  }, [offset]);

  useEffect(() => {
    if (isLoading) return;
    if (!checkScrollBottom()) return;
    if (postCounts > offset * 5 + 5) {
      // 每次都會要 limit = 5 篇文章，加 5 是因為 offset 初始值為 0
      setOffset(offset + 5);
    }
  }, [scroll]);

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
      {loadEnd && <LoadMore>沒有食記囉</LoadMore>}
    </Wrapper>
  );
}

export default HomePage;
