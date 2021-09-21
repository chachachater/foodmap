import styled from "styled-components";
import React from "react";
import addBtn from "../pictures/addBtn.svg";
import backToTop from "../pictures/backtotop.svg";
import AvatarImg from "../pictures/avatar.png";
import BannerImg from "../pictures/banner.png";
import FoodImg from "../pictures/food.png";
import { FONT, COLOR, MEDIA_QUERY } from "../../constants/style";
export const BackToTopBtn = styled.div`
  height: 55px;
  width: 55px;
  position: fixed;
  background: url(${backToTop}) center/cover;
  right: 10px;
  bottom: 10px;
`;
const Banner = styled.div`
  height: 335px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: url(${BannerImg}) center/cover;
  z-index: -1;
`;
const AddBanner = styled.div`
  background: url(${addBtn}) center/cover;
  position: absolute;
  z-index: 1;
  bottom: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
`;
const Avatar = styled.div`
  width: 192px;
  height: 192px;
  background: url(${AvatarImg}) center/cover;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 95px;
  margin-bottom: 130px;
`;
const Name = styled.div`
  margin-top: 15px;
  font-size: ${FONT.logo};
  margin-bottom: 40px;
  letter-spacing: 2px;
`;
const ArticleCounter = styled.div``;
const InfoContainer = styled(ProfileContainer)`
  align-items: center;
  margin-top: -110px;
  margin-bottom: 0;
`;
const AddAvatar = styled(AddBanner)`
  bottom: 0;
  right: 0;
`;
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 220px;
  width: 220px;
`;
const EditingGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const EditName = styled.div`
  font-size: ${FONT.h3};
  color: ${COLOR.text_gray};
  border: 1px solid #013328;
  border-radius: 25px;
  padding: 15px 30px;
  margin-bottom: 30px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
const SaveBtn = styled.button`
  font-size: ${FONT.h3};
  color: ${COLOR.primary};
  overflow: hidden;
  background-color: ${COLOR.btn};
  border-radius: 25px;
  padding: 10px 25px;
`;
const CancelBtn = styled(SaveBtn)`
  background-color: transparent;
  border: 1px solid black;
  color: ${COLOR.text_gray};
  margin-left: 40px;
`;
export function Profile() {
  return (
    <ProfileContainer>
      <Banner>
        <AddBanner />
      </Banner>
      <InfoContainer>
        <AvatarContainer>
          <Avatar />
          <AddAvatar />
        </AvatarContainer>
        <Name>rich</Name>
        <EditingGroup>
          <EditName>編輯名稱</EditName>
          <BtnContainer>
            <SaveBtn>儲存</SaveBtn>
            <CancelBtn>取消</CancelBtn>
          </BtnContainer>
        </EditingGroup>
        <ArticleCounter>共有 1 篇食記</ArticleCounter>
      </InfoContainer>
    </ProfileContainer>
  );
}
const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 40px;
  margin-bottom: 90px;
  ${MEDIA_QUERY.md} {
    margin-bottom: 40px;
  }
`;
const FilterTitle = styled.h1``;
const FilterOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FilterOption = styled.div`
  margin-right: 20px;
`;
function Filters() {
  return (
    <FilterOptionsContainer>
      <FilterOption>最新排序</FilterOption>
      <FilterOption>熱門排序</FilterOption>
    </FilterOptionsContainer>
  );
}

function FilterBar() {
  return (
    <FilterContainer>
      <FilterTitle>最新文章</FilterTitle>
      <Filters />
    </FilterContainer>
  );
}
const ArticleContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
  ${MEDIA_QUERY.md} {
    margin: 0 10px;
    margin-bottom: 20px;
  }
  ${MEDIA_QUERY.sm} {
    flex-direction: column;
    justify-content: center;
    algin-items: center;
    height: 300px;
    margin: 0;
    margin-bottom: 20px;
  }
`;
const UserAllArticle = styled.div`
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  ${MEDIA_QUERY.lg} {
    max-width: 768px;
  }
  ${MEDIA_QUERY.sm} {
    margin: 0;
  }
`;
const ArticleImage = styled.div`
  height: 100%;
  width: 375px;
  background: url(${FoodImg}) center/cover;
  ${MEDIA_QUERY.md} {
    margin: 0 auto;
  }
`;
const ArticleTitle = styled.div`
  font-size: ${FONT.h3};
  line-height: 32px;
  letter-spacing: 3px;
  ${MEDIA_QUERY.sm} {
    max-width: 375px;
    margin: 0 auto;
  }
`;
const ArticleDesc = styled.div`
  margin-top: 16px;
  height: 100%;
  justify-content: center;
  ${MEDIA_QUERY.md} {
    display: none;
  }
`;
const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 30px;
  ${MEDIA_QUERY.md} {
    justify-content: center;
    margin-left: 10px;
  }
  ${MEDIA_QUERY.sm} {
    margin: 0;
  }
`;
export function Article() {
  return (
    <UserAllArticle>
      <FilterBar />
      <ArticleContainer>
        <ArticleImage />
        <ArticleContent>
          <ArticleTitle>
            台北西門町少女系餐廳甜蜜回歸！「水蜜桃舒芙蕾」及「巨型芒果舒芙蕾」登場，為你的七夕做好準備
          </ArticleTitle>
          <ArticleDesc>
            直徑20公分、高9公分比雲朵還柔軟的巨型雲朵舒芙蕾，台灣首創就在Meat
            Up！頂級日式麵粉低溫現烤40分鐘，放上法式奶油，再倒入重乳醬，一旁搭配明治香草冰淇淋、軟Q白珍珠、新鮮芒果，口感超ㄉㄨㄞ！
          </ArticleDesc>
        </ArticleContent>
      </ArticleContainer>
    </UserAllArticle>
  );
}
