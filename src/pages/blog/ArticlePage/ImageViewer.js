import React, { useState } from "react";
import ReactImageViewer from "../../../components/ImageViewer/ReactImageViewer";
import { Img } from "./ArticlePageStyle";
import Carousel from "nuka-carousel";

function ImageViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1604262590904-0039c606dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1184&q=80",
    },
  ];

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
        {photos.map((img, index) => (
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
        imgs={photos}
        isOpen={isOpen}
        onClose={handleImageClose}
        currImg={currImg}
        onClickPrev={gotoPrevImg}
        onClickNext={gotoNextImg}
      />
    </>
  );
}

export default ImageViewer;
