/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import {
  ProfileContainer,
  Banner,
  AddBanner,
  InfoContainer,
  AvatarContainer,
  Avatar,
  AddAvatar,
  Name,
  EditingGroup,
  BtnContainer,
  SaveBtn,
  CancelBtn,
  ArticleCounter,
  FileInput,
  NoBorderLabel,
  Input,
  Span,
  EditLabel
} from "./ProfilePageStyled";
import { Article } from "../../../components/Article";
import { UserAllArticle } from "../../../components/Article/ArticleStyle";
import FilterBar from "../../../components/Article/ArticleFilter";
import { fetchUserData, fecthPostsByUserId } from "../../../WebAPI";
import useEditUserData from "../../../hooks/useEditUserData"
import useConfirmUser from "../../../hooks/useConfirmUser"

function ProfilePage() {
  const { id } = useParams();
  const { confirmUser } = useConfirmUser(id)
  const {
    avatar,
    setAvatar,
    banner,
    setBanner,
    uploadImages,
    nickname,
    setNickname,
    handleInputChange,
    handleSubmit } = useEditUserData()
  const [defaultBanner, setDefaultBanner] = useState('')
  const [defaultAvatar, setDefaultAvatar] = useState('')
  const [postCounts, setPostCounts] = useState('')
  const [posts, setPosts] = useState([])
  const [images, setImages] = useState([])
  const [filter, setFilter] = useState('createdAt')
  useEffect(async () => {
console.log('c')
  }, [filter]);
  useEffect(() => {
    fetchUserData(id)
      .then((result) => {
        console.log(result)
        setNickname(result.data.nickname)
        if (result.data.background_pic_url) setDefaultBanner(result.data.background_pic_url)
        if (result.data.picture_url) setDefaultAvatar(result.data.picture_url)
      })
    fecthPostsByUserId(id)
      .then((result) => {
        setPostCounts(result.postCounts)
        setPosts(result.posts)
        setImages(result.images)
        console.log(result)
      })
  }, [])
  return (
    <Wrapper>
      <Navbar />
      <ProfileContainer>
        <Banner banner={banner ? banner : defaultBanner}>
          {confirmUser && (
            <AddBanner>
              <NoBorderLabel>
                <FileInput type="file" accept="image/jpg, image/jpeg, image/png" onChange={uploadImages(setBanner)} />
              </NoBorderLabel>
            </AddBanner>
          )}
        </Banner>
        <InfoContainer>
          <AvatarContainer>
            <Avatar avatar={avatar ? avatar : defaultAvatar} />
            {confirmUser &&
                (<AddAvatar>
                <NoBorderLabel>
                <FileInput type="file" accept="image/jpg, image/jpeg, image/png" onChange={uploadImages(setAvatar)} />
                </NoBorderLabel>
                </AddAvatar>
              )}
          </AvatarContainer>
          <Name>{nickname}</Name>
          {confirmUser && (
            <EditingGroup>
              <EditLabel>
                <Span></Span>
                <Input placeholder="編輯名稱" onChange={handleInputChange(setNickname)} />
              </EditLabel>
              <BtnContainer>
                <SaveBtn onClick={handleSubmit}>儲存</SaveBtn>
                <CancelBtn>取消</CancelBtn>
              </BtnContainer>
            </EditingGroup>
          )}
          <ArticleCounter>共有 {postCounts} 篇食記</ArticleCounter>
        </InfoContainer>
      </ProfileContainer>
      <Article postsData={posts} setFilter={setFilter}/>
    </Wrapper>
  );
}

export default ProfilePage;
