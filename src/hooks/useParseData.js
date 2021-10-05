import { useState } from "react";

// 後端有一支 api 回傳的格式跟其他 api 不同，用這個 hook 來讓前端有統一的格式
export default function useParseData() {
  const [parseResult, setParseResult] = useState([])

  function parseData(data) {
    const result = []
    data.posts.forEach((each, index) => {
      each.Pictures = [{ food_picture_url: data.images[index].link}]
      result.push(each)
    })
    return result
  }

  return {
    parseResult,
    setParseResult,
    parseData
  };
}
