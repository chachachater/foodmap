/* eslint-disable */
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
import React, { useState, useEffect } from "react";
import { fetchGetUserData } from "../../../WebAPI";
import useEditUserData from "../../../hooks/useEditUserData"
import useConfirmUser from "../../../hooks/useConfirmUser"
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    fetchGetUserData(id)
      .then((result) => {
        setNickname(result.data.nickname)
        if (result.data.background_pic_url) setDefaultBanner(result.data.background_pic_url)
        if (result.data.picture_url) setDefaultAvatar(result.data.picture_url)
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
          <ArticleCounter>共有 1 篇食記</ArticleCounter>
        </InfoContainer>
      </ProfileContainer>
      <Article />
    </Wrapper>
  );
}

export default ProfilePage;
