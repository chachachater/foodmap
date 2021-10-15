import { useState } from "react";

// 後端有一支 api 回傳的格式跟其他 api 不同，用這個 hook 來讓前端有統一的格式
export default function useParseData() {
  const [parseResult, setParseResult] = useState([]);
  return {
    parseResult,
    setParseResult,
  };
}
