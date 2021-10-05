/* eslint-disable */
import { useState } from "react";
import { fetchAddPost, fetchEditPost } from "../WebAPI";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/userReducer"

export default function usePost() {
  const history = useHistory();
  const [images, setImages] = useState([])
  const [restaurantId, setRestaurantId] = useState('999')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [visitedDate, setVisitedDate] = useState('')
  const [isPublished, setIsPublished] = useState(true)
  const [postId, setPostId] = useState('')
  const userState = useSelector(selectUser);

  const { userId } = userState.result.data
  // let userId = 4
  // if (userState.result) {
  //   const { userId } = userState.result.data
  // }
  function handleInputChange(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }
  function uploadImages (setter) {
    const checkedList = [
      "image/jpeg",
      "image/png",
      "image/jpg",
    ]
    return (e) => {
      console.log(e.target.files)
      if (!checkedList.some(key => Object.values(e.target.files).every(each => each.type.includes(key)))) {
        console.log('! image')
        return
      }
      const maxImages = 3
      const filesArr = []
      for (let i = 0; i < e.target.files.length; i++) {
        if (i >= maxImages) break
        filesArr.push(URL.createObjectURL(e.target.files.item(i)))
      }
      setter(filesArr)
      Array.from(e.target.files).map(each => URL.revokeObjectURL(each))
    };
  }
  function getResaurantId (setter) {
    return (placeId) => {
      console.log(placeId)
      setter(placeId)
      }
  }
  async function handleSubmit() {
    const postData = {}
    const blobArr = []
    if (!images.length) return alert('至少上傳一張圖片')
    for (let i = 0; i < images.length; i++) {
      let blob = await fetch(images[i]).then(result => result.blob());
      console.log(blob.arrayBuffer())
      blobArr.push(blob)
    }
    postData.images = blobArr
    postData.user_id = userId
    postData.restaurant_id = restaurantId
    postData.title = title
    postData.content = content
    postData.visited_time = visitedDate
    postData.is_published = isPublished
    if (postId) {
      return fetchEditPost(postData, postId)
      .then(() => history.push("/home"))
    }
    return fetchAddPost(postData).then(() => history.push("/home"))
  }
  return {
    images,
    uploadImages,
    setImages,
    title,
    setTitle,
    content,
    setContent,
    visitedDate,
    setVisitedDate,
    setIsPublished,
    restaurantId,
    setRestaurantId,
    getResaurantId,
    setPostId,
    handleInputChange,
    handleSubmit
  };
}
