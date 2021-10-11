import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/userReducer";

export default function useGetId() {
  const userState = useSelector(selectUser);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (!userState.result) return;
    setUserId(userState.result.data.userId);
  }, [userState]);

  return {
    userId,
  };
}
