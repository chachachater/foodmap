import React from "react";
import {
  ArticleContainer,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleDesc,
} from "./ArticleStyle";

function ArticleInfo() {
  return (
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
  );
}

export default ArticleInfo;
