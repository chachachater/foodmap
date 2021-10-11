import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/userReducer";

export default function useConfirmUser(id) {
  // 確認進入頁面的使用者是否為本人，比如進入一個個人頁面，就會確認使用者是否為該頁面資料的擁有者
  const userState = useSelector(selectUser);
  if (userState.result && userState.result.data.userId == id) return true;
  return false;
}
