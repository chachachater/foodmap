import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import Search from "../../../components/Search";
import { Article,ArticleInfo } from "../../../components/Article";
import { UserAllArticle } from "../../../components/Article/ArticleStyle";
import ImageViewer from "../../../components/ImageViewer";
import {
  SearchContainer,
  SearchBorder,
  SearchMap,
  SearchInfo,
  RestaurantInfo,
  InfoTitle,
  InfoContent,
  InfoText,
  AddLogo,
  BhLogo,
  UrlLogo,
  InfoImg
} from "./SearchPageStyle";

function SearchPage() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1604262590904-0039c606dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1184&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];


  return (
    <Wrapper>
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search text="搜尋餐廳" />
        </SearchBorder>
        <SearchMap></SearchMap>
        <SearchInfo>
          <RestaurantInfo>
            <InfoTitle>貳樓餐廳 Second Floor Cafe 仁愛店</InfoTitle>
            <InfoContent>
              <AddLogo></AddLogo>
              <InfoText>
                100台北市中正區仁愛路二段108號
              </InfoText>
            </InfoContent>
            <InfoContent>
              <BhLogo></BhLogo>
              <InfoText>
                營業中：  10:00–21:00
              </InfoText>
            </InfoContent>
            <InfoContent>
              <UrlLogo></UrlLogo>
              <InfoText>
                secondfloorcafe.com
              </InfoText>
            </InfoContent>
          </RestaurantInfo>
          <InfoImg>
            <ImageViewer photos={photos} />;
          </InfoImg>
        </SearchInfo>
        <Article />
        <UserAllArticle>
          <ArticleInfo />
        </UserAllArticle> 
      </SearchContainer>
    </Wrapper>
  );
}

export default SearchPage;
