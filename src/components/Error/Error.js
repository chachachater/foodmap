import React from "react";
import { useHistory } from "react-router-dom";
import useError from "../../hooks/useError";
import { ErrorBackground, ErrorText, PreviousBtn } from "./ErrorStyle";

function Error() {
  const { setIsError } = useError();
  const history = useHistory();

  const handleBack = () => {
    history.push("/home");
    setIsError(false);
  };

  return (
    <ErrorBackground>
      <ErrorText>資料不存在</ErrorText>
      <PreviousBtn onClick={handleBack}>回到首頁</PreviousBtn>
    </ErrorBackground>
  );
}

export default Error;
