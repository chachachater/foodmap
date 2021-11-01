import { Parser } from "html-to-react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const htmlToReactParser = (html) => {
  const htmlToReactParser = new Parser();
  return htmlToReactParser.parse(html);
};

export const checkScrollBottom = () => {
  const innerHeight = window.innerHeight;
  const { scrollHeight } = document.body;
  const { scrollTop } = document.documentElement;
  if (innerHeight + scrollTop + 48 >= scrollHeight) {
    // 因為 Wrapper 這個 global style 會設置 margin: 48px auto，在使用 scrollHeight 的時候會有 edge case: border, scrollbar, margin 的高度不會被計算，所以要加回去
    return true;
  }
  return false;
};

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 驗證食記日期 (符合 yyyy-MM-dd 日期格式, 不超過當天)
export function isValidDate(dateString) {
  if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString)) return false;
  const date = new Date(dateString + 'T00:00:00+0800') // 設定為台灣時區的凌晨
  if (!date) return false
  return date <= new Date()
}