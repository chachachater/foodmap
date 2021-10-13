import { useState } from "react";

export default function useError() {
  const [isError, setIsError] = useState(false);
  return {
    isError,
    setIsError,
  };
}
