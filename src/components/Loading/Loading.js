import React from "react";
import {
  Background,
  Title,
  Spinner,
  SpinnerRing,
  SpinnerLine
} from "./LoadingStyle";

function Loading() {
  return (
    <Background>
      <Title>吃貨地圖</Title>
      <Spinner viewBox="0 0 50 50">
        <SpinnerRing cx="25" cy="25" r="22.5"/>
        <SpinnerLine cx="25" cy="25" r="22.5"/>
      </Spinner>
    </Background>
  );
}

export default Loading;
