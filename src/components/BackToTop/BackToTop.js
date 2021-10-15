import React from "react";
import { BackToTop } from "./BackToTopStyle";

function BackToTopBtn() {
  function handleBackToTop() {
    window.scrollTo(0, 0);
  }

  return <BackToTop onClick={handleBackToTop} />;
}

export default BackToTopBtn;
