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
  SaveBtn,
  ArticleCounter,
  FileInput,
  NoBorderLabel,
  Input,
  Span,
  EditLabel,
} from "./ProfilePageStyled";
import { Article } from "../../../components/Article";
import { fetchUserData, fetchPostsByUserId } from "../../../WebAPI";
import useEditUserData from "../../../hooks/useEditUserData";
import useConfirmUser from "../../../hooks/useConfirmUser";
import useParseData from "../../../hooks/useParseData";
import useScroll from "../../../hooks/useScroll";

function ProfilePage() {
  const { id } = useParams();
  let confirmUser = useConfirmUser(id);
  const {
    avatar,
    setAvatar,
    banner,
    setBanner,
    uploadImages,
    nickname,
    setNickname,
    handleInputChange,
    handleSubmit,
  } = useEditUserData();
  const { parseResult, setParseResult, parseData } = useParseData();
  const scroll = useScroll();
  const [defaultBanner, setDefaultBanner] = useState("");
  const [defaultAvatar, setDefaultAvatar] = useState("");
  const [postCounts, setPostCounts] = useState("");
  const [filter, setFilter] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [clientHeight, setClientHeight] = useState(
    (document.documentElement.clientHeight) * 2
  );

  useEffect(() => {
    fetchUserData(id).then((result) => {
      //console.log(result);
      setNickname(result.data.nickname);
      if (result.data.background_pic_url)
        setDefaultBanner(result.data.background_pic_url);
      if (result.data.picture_url) setDefaultAvatar(result.data.picture_url);
    });
    fetchPostsByUserId(id, offset, filter).then((result) => {
      setPostCounts(result.postCounts);
      //console.log(result);
      // 這邊等後端改成 left join 會更好處理
      setParseResult(parseData(result));
    });
  }, []);

  useEffect(async () => {
    setOffset(0)
    fetchPostsByUserId(id, offset, filter).then((result) => {
      console.log(result);
      setParseResult(parseData(result));
      //setParseResult(parseResult.concat(parseData(result)));
    });

    console.log(filter);
  }, [filter]);

  useEffect(async () => {
    console.log(clientHeight)
    //console.log(scroll.y)
    if (clientHeight >= scroll.y) return;

    if (postCounts <= offset) return;

    setOffset(offset + 5);

    fetchPostsByUserId(id, offset, filter).then((result) => {
      console.log(result);
      setParseResult(parseResult.concat(parseData(result)));
    });
    console.log(scroll);
    setClientHeight(scroll.y + 722);
  }, [scroll]);

  return (
    <Wrapper>
      <Navbar />
      <ProfileContainer>
        <Banner banner={banner ? banner : defaultBanner}>
          {confirmUser && (
            <AddBanner>
              <NoBorderLabel>
                <FileInput
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={uploadImages(setBanner)}
                />
              </NoBorderLabel>
            </AddBanner>
          )}
        </Banner>
        <InfoContainer>
          <AvatarContainer>
            <Avatar avatar={avatar ? avatar : defaultAvatar} />
            {confirmUser && (
              <AddAvatar>
                <NoBorderLabel>
                  <FileInput
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={uploadImages(setAvatar)}
                  />
                </NoBorderLabel>
              </AddAvatar>
            )}
          </AvatarContainer>
          <Name>{nickname}</Name>
          {confirmUser && (
            <EditingGroup>
              <EditLabel>
                <Span></Span>
                <Input
                  placeholder="編輯名稱"
                  onChange={handleInputChange(setNickname)}
                />
              </EditLabel>
              <SaveBtn onClick={handleSubmit}>儲存</SaveBtn>
            </EditingGroup>
          )}
          <ArticleCounter>共有 {postCounts} 篇食記</ArticleCounter>
        </InfoContainer>
      </ProfileContainer>
      <Article postsData={parseResult} setFilter={setFilter} setClientHeight={setClientHeight} />
    </Wrapper>
  );
}

export default ProfilePage;
