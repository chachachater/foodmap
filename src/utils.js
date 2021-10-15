import { Parser } from "html-to-react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const htmlToReactParser = (html) => {
  const htmlToReactParser = new Parser();
  return htmlToReactParser.parse(html);
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function isValidDate(dateString) {
  console.log(dateString)
  if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString)) return false;
  const dateParts = dateString.split("-");
  const day = parseInt(dateParts[2], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[0], 10);
  if (year < 2000 || month == 0 || month > 12) return false;
  // 對 2月 28 或 29 天做檢查
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;
  if (!(day > 0 && day <= monthLength[month - 1])) return false;
  // 年/月/日不能超過今天
  return new Date(dateString) <= new Date(new Date());
}