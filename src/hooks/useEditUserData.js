/* eslint-disable */
import { useState } from "react";
import { fetchEditUserData } from "../WebAPI";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/userReducer"

export default function useEditUserData() {
  const [avatar, setAvatar] = useState('')
  const [banner, setBanner] = useState('')
  const [nickname, setNickname] = useState('')
  const userState = useSelector(selectUser);
  let userId = 4
  if (userState.result) {
   userId = userState.result.data.userId
  }
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
      setter(Array.from(e.target.files).map(each => URL.createObjectURL(each)))
      Array.from(e.target.files).map(each => URL.revokeObjectURL(each))
    };
  }
  async function handleSubmit() {
    const data = {}
    if (avatar) {
      let blob = await fetch(avatar).then(result => result.blob());
      data.avatar = blob
    }
    if (banner) {
      let blob = await fetch(banner).then(result => result.blob());
      data.background = blob
    }
    if (nickname) {
      data.nickname = nickname
    }
    if (Object.keys(data).length) {
      fetchEditUserData(data, userId)
      .then(result => {
        console.log(result)
        if(result.ok) alert('操作成功')
      })
    }
  }
  return {
    avatar,
    setAvatar,
    banner,
    setBanner,
    uploadImages,
    nickname,
    setNickname,
    handleInputChange,
    handleSubmit
  };
}
