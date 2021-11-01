import React, { useState, useRef } from "react";
import { ImageContainer, Image } from "./ArticleStyle";
import useInterSection from "../../hooks/useInterSection";
import PropTypes from "prop-types";

function ArticleImage({ imgSrc, setPage }) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useInterSection(imgRef, () => {
    setPage((pre) => pre + 1);
    setIsInView(true);
  });
  return (
    <ImageContainer ref={imgRef}>
      {isInView && <Image src={imgSrc} />}
    </ImageContainer>
  );
}
ArticleImage.propTypes = {
  imgSrc: PropTypes.string,
  setPage: PropTypes.func,
};
export default ArticleImage;
