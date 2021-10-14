import { useState } from "react";

export default function useError() {
  const [isError, setIsError] = useState(false);
  console.log(isError)
  return {
    isError,
    setIsError,
  };
}
