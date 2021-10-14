import { useState, useRef } from "react";
import { fetchAddPost, fetchEditPost } from "../WebAPI";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/userReducer";
import useLoading from "../hooks/useLoading";
import { isValidDate } from "../utils";

export default function usePost() {
  const history = useHistory();
  const [images, setImages] = useState([]);
  const [restaurantId, setRestaurantId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [visitedDate, setVisitedDate] = useState("");
  const isPublished = useRef(true);
  const [postId, setPostId] = useState("");
  const userState = useSelector(selectUser);
  const { isLoading, setIsLoading } = useLoading();
  const [restaurantName, setRestaurantName] = useState("");

  function handleInputChange(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }
  function uploadImages(setter) {
    const checkedList = ["image/jpeg", "image/png", "image/jpg"];
    return (e) => {
      console.log(e.target.files);
      if (
        !checkedList.some((key) =>
          Object.values(e.target.files).every((each) => each.type.includes(key))
        )
      ) {
        console.log("! image");
        return;
      }
      const maxImages = 3;
      const filesArr = [];
      for (let i = 0; i < e.target.files.length; i++) {
        if (i >= maxImages) break;
        filesArr.push(URL.createObjectURL(e.target.files.item(i)));
      }
      setter(filesArr);
      Array.from(e.target.files).map((each) => URL.revokeObjectURL(each));
    };
  }
  function getRestaurantId(setter) {
    return (placeId) => {
      console.log(placeId);
      setter(placeId);
    };
  }
  async function handleSubmit() {
    const { userId } = userState.result.data;
    const checkedList = [restaurantId, title, content, visitedDate, userId];
    console.log(checkedList);
    if (!isValidDate(visitedDate)) alert("食記的日期不能超過當日");
    if (!checkedList.every((every) => every)) {
      return alert(`請輸入全部欄位`);
    }
    const postData = {};
    const blobArr = [];
    if (!images.length) return alert("至少上傳一張圖片");
    console.log(images);
    setIsLoading(true);
    for (let i = 0; i < images.length; i++) {
      let blob = await fetch(images[i]).then((result) => result.blob());
      console.log(blob.arrayBuffer());
      blobArr.push(blob);
    }
    postData.images = blobArr;
    postData.user_id = userId;
    postData.restaurant_id = restaurantId;
    postData.title = title;
    postData.content = content;
    postData.visited_time = visitedDate;
    postData.is_published = isPublished.current;
    if (postId) {
      return fetchEditPost(postData, postId).then((result) => {
        console.log("edit", result);
        setIsLoading(false);
        if (!result.ok) return alert(result.message);
        history.push(`/posts/${postId}`);
      });
    }
    return fetchAddPost(postData).then((result) => {
      setIsLoading(false);
      if (!result.ok) return alert(result.message);
      history.push(`/backstage/${userId}`);
    });
  }
  return {
    isLoading,
    images,
    uploadImages,
    setImages,
    title,
    setTitle,
    content,
    setContent,
    visitedDate,
    setVisitedDate,
    isPublished,
    restaurantId,
    setRestaurantId,
    getRestaurantId,
    setPostId,
    handleInputChange,
    handleSubmit,
    restaurantName,
    setRestaurantName,
  };
}
