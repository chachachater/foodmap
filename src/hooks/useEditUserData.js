import { useState } from "react";
import { fetchEditUserData } from "../WebAPI";
import useGetUserId from "../hooks/useGetId";

export default function useEditUserData() {
  const [avatar, setAvatar] = useState("");
  const [banner, setBanner] = useState("");
  const [nickname, setNickname] = useState("");
  const { userId } = useGetUserId();

  function handleInputChange(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }
  function uploadImages(setter) {
    const checkedList = ["image/jpeg", "image/png", "image/jpg"];
    return (e) => {
      if (
        !checkedList.some((key) =>
          Object.values(e.target.files).every((each) => each.type.includes(key))
        )
      ) {
        return;
      }
      setter(
        Array.from(e.target.files).map((each) => URL.createObjectURL(each))
      );
      Array.from(e.target.files).map((each) => URL.revokeObjectURL(each));
    };
  }
  async function handleSubmit() {
    const data = {};
    if (avatar) {
      let blob = await fetch(avatar).then((result) => result.blob());
      data.avatar = blob;
    }
    if (banner) {
      let blob = await fetch(banner).then((result) => result.blob());
      data.background = blob;
    }
    if (nickname) {
      data.nickname = nickname;
    }
    if (Object.keys(data).length) {
      fetchEditUserData(data, userId).then((result) => {
        if (result && result.ok) return alert("操作成功");
      });
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
    handleSubmit,
  };
}
