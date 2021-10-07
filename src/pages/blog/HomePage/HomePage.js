import React, { useState, useEffect, useRef } from "react";
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
import useParseData from "../../../hooks/useParseData";
import useScroll from "../../../hooks/useScroll";

function HomePage() {
  const { parseResult, setParseResult, parseData } = useParseData();
  const scroll = useScroll();
  const [offset, setOffset] = useState(0);
  const [postCounts, setPostCounts] = useState(0);
  const [clientHeight, setClientHeight] = useState(
    document.documentElement.clientHeight
  );

  useEffect(() => {
    fetchAllPosts(offset).then((results) => {
      console.log(results);
      if (!results) return;
      setPostCounts(results.postCounts);
      setParseResult(parseData(results));
      setOffset(offset + 5);
    });
  }, []);

  useEffect(() => {
    if (clientHeight >= scroll.y) return;

    if (postCounts <= offset) return;

    setOffset(offset + 5);

    fetchAllPosts(offset).then((result) => {
      setParseResult(parseResult.concat(parseData(result)));
    });

    setClientHeight(scroll.y + 722);
  }, [scroll]);

  return (
    <Wrapper>
      <Navbar />
      <HomeBanner>
        <BannerBg></BannerBg>
        <BannerInfo>
          <BannerText>吃貨地圖，探索你想吃的美食餐廳</BannerText>
          <HomePageSearch />
        </BannerInfo>
      </HomeBanner>
      <HomeTitle>最新文章</HomeTitle>
      <UserAllArticle>
        <ArticleInfo postsData={parseResult} />
      </UserAllArticle>
      <LoadMore>沒有食記囉</LoadMore>
    </Wrapper>
  );
}

export default HomePage;
