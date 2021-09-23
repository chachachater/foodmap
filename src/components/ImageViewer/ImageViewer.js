import React, { useState } from "react";
import ReactImageViewer from "./ReactImageViewer";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import PropTypes from "prop-types";

function ImageViewer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const handleImageClick = (index) => {
    setIsOpen(true);
    setCurrImg(index);
  };

  const handleImageClose = () => {
    setIsOpen(false);
  };

  const gotoNextImg = () => {
    setCurrImg(currImg + 1);
  };

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1);
  };

  const Img = styled.img`
    height: 260px;
    object-fit: contain;
  `;

  return (
    <>
      <Carousel
        slidesToShow={2}
        autoplay={true}
        wrapAround={true}
        cellSpacing={15}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "black",
            margin: "0 5px",
          },
        }}
      >
        {props.photos.map((img, index) => (
          <Img
            key={index}
            alt="PICTU"
            onClick={() => {
              handleImageClick(index);
            }}
            src={img.src}
          />
        ))}
      </Carousel>
      <ReactImageViewer
        imgs={props.photos}
        isOpen={isOpen}
        onClose={handleImageClose}
        currImg={currImg}
        onClickPrev={gotoPrevImg}
        onClickNext={gotoNextImg}
      />
    </>
  );
}

ImageViewer.propTypes = {
  photos: PropTypes.array,
};


export default ImageViewer;
