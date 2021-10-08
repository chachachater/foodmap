import { Parser } from "html-to-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const htmlToReactParser = (html) => {
  const htmlToReactParser = new Parser();
  return htmlToReactParser.parse(html);
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
