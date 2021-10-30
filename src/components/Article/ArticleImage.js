/* eslint-disable */
import React, { useState, useRef } from "react";
import {
  ImageContainer,
  Image,
} from "./ArticleStyle";
import useInterSection from "../../hooks/useInterSection"

function ArticleImage({ imgSrc, setPage }) {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()
  useInterSection(imgRef, () => {
    setPage(pre => pre + 1)
    setIsInView(true)
  })
  return (
    <ImageContainer ref={imgRef}>
      {isInView && <Image src={imgSrc} />}
    </ImageContainer>
  );
}

export default ArticleImage;